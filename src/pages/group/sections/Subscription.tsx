import React, { FC, useContext, useState } from "react"
import { IPaymentIntervals } from "types/group"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"
import { SubscriptionOptions } from "./SubscriptionOptions"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { Participants } from "./Participants"
import { useCartCount } from "hooks/useCartCount"

interface ISubscription {
  paymentIntervals: Array<IPaymentIntervals>
  activity: {
    name: string
    location: string
    duration: string
    schedule: string
    level: string
    ageGroup: string
    image: string
  }
}

export const Subscription: FC<ISubscription> = ({
  paymentIntervals,
  activity,
}) => {
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const { count: currentCount } = useCartCount()
  const [count, setCount] = useState(currentCount || 0)
  const [addedParticipants, setAddedParticipants] = useState<Array<string>>([])
  const [selectedPayment, setSelectedPayment] = useState<{
    name: string
    price: number
  }>({
    name: paymentIntervals[0]?.name,
    price: paymentIntervals[0]?.group_price,
  })
  const uid = crypto.randomUUID()
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)
  const cart = JSON.parse(localStorage.getItem(Storage.cart) as string)
  const selectedGroup = localStorage.getItem(Storage.selectedGroup)

  const getButtonCTA = () => {
    if (!user) return "Login to subscribe"
    if (!user.familyMembers) return "Add a participant"
    if (currentCount > count) {
      setTimeout(() => {
        setCount(currentCount)
      }, 3000)
      return "Activity added!"
    }
    return "Add to cart"
  }

  const handleOnclick = () => {
    if (!user) {
      setModalType("login")
      setModalOpen(true)
    }
    if (user && !user.familyMembers) {
      setModalType("participant")
      setModalOpen(true)
    }
    if (user && addedParticipants && selectedPayment) {
      const product = {
        uid,
        activityInformation: { externalId: selectedGroup, ...activity },
        paymentMethod: selectedPayment,
        participants: addedParticipants,
      }
      localStorage.setItem(
        Storage.cart,
        JSON.stringify(cart?.length ? [...cart, product] : [{ ...product }])
      )
      window !== undefined && window.dispatchEvent(new Event("storage"))
    }
  }

  return (
    <div className="bg-white border-2 border-primary rounded-3xl overflow-hidden min-w-[25rem]">
      <div className="py-4 md:py-6 px-6 md:px-8">
        {user && (
          <Participants
            addedParticipants={addedParticipants}
            setAddedParticipants={setAddedParticipants}
          />
        )}
        <p className="text-h2-mob md:text-h2 mb-4">Subscription options:</p>
        <div className="flex flex-col gap-6">
          {paymentIntervals.map(({ id, name, group_price, lesson_count }) => (
            <SubscriptionOptions
              key={id}
              name={name}
              price={group_price}
              lessonCount={lesson_count}
              userExists={Boolean(user)}
              isActive={Boolean(user) && selectedPayment.name === name}
              setSelectedPayment={setSelectedPayment}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center pt-4 md:pt-6 mt-4 md:mt-6 border-t-2 border-primary cursor-pointer transition-[opacity] duration-300 hover:opacity-70">
          <p className="text-h2-mob md:text-h2 font-semibold">Subtotal</p>
          <p className="text-h2-mob md:text-h2 font-semibold text-primary">
            €{selectedPayment.price.toFixed(2) || 0}
          </p>
        </div>
      </div>

      <PrimaryButton
        additionalClass={`border-t-2 border-t-primary ${
          currentCount > count
            ? "disabled:opacity-90 disabled:hover:bg-primary"
            : " disabled:opacity-50"
        }`}
        onClick={handleOnclick}
        disabled={(user && !addedParticipants.length) || currentCount > count}
      >
        {getButtonCTA()}
      </PrimaryButton>
    </div>
  )
}
