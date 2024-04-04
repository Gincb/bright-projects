import React, { FC, useContext, useState } from "react"
import { IPaymentIntervals } from "types/group"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"
import { SubscriptionOptions } from "./SubscriptionOptions"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { Participants } from "./Participants"

interface ISubscription {
  paymentIntervals: Array<IPaymentIntervals>
  activity: {
    location: string
    duration: string
    schedule: string
    level: string
    ageGroup: string
  }
}

export const Subscription: FC<ISubscription> = ({
  paymentIntervals,
  activity,
}) => {
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const [addedParticipants, setAddedParticipants] = useState<Array<string>>([])
  const [selectedPayment, setSelectedPayment] = useState<{
    name: string
    price: number
  }>({
    name: paymentIntervals[0]?.name,
    price: paymentIntervals[0]?.group_price,
  })
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)
  const cart = JSON.parse(localStorage.getItem(Storage.cart) as string)
  const selectedGroup = localStorage.getItem(Storage.selectedGroup)

  const getButtonCTA = () => {
    if (!user) return "Login to subscribe"
    if (!user.familyMembers) return "Add a participant"
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
        activityInformation: { externalId: selectedGroup, ...activity },
        paymentMethod: selectedPayment,
        participants: addedParticipants,
      }
      localStorage.setItem(
        Storage.cart,
        JSON.stringify(cart?.length ? [...cart, product] : [{ ...product }])
      )
    }
  }

  return (
    <div className="bg-white border-2 border-primary rounded-3xl overflow-hidden min-w-[18.75rem]">
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
      </div>
      <PrimaryButton
        additionalClass="border-t-2 border-t-primary disabled:opacity-50"
        onClick={handleOnclick}
        disabled={user && !addedParticipants.length}
      >
        {getButtonCTA()}
      </PrimaryButton>
    </div>
  )
}
