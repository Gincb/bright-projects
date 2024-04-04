import React, { FC, useContext, useEffect, useState } from "react"
import { IPaymentIntervals } from "types/group"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"
import { SubscriptionOptions } from "./SubscriptionOptions"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { Participants } from "./Participants"

export const Subscription: FC<{
  paymentIntervals: Array<IPaymentIntervals>
}> = ({ paymentIntervals }) => {
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const [addedParticipants, setAddedParticipants] = useState<Array<string>>([])
  const [selectedPayment, setSelectedPayment] = useState<string>(
    "paymentIntervals[0].name"
  )
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)
  const cart = JSON.parse(localStorage.getItem(Storage.cart) as string)

  const getButtonCTA = () => {
    if (!user) return "Login to subscribe"
    if (!user.familyMembers) return "Add a participant"
    return "Enroll student"
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
  }

  useEffect(() => {
    localStorage.setItem(
      Storage.cart,
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPayment,
        participants: addedParticipants,
      })
    )
  }, [addedParticipants, cart, selectedPayment])

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
              isActive={selectedPayment === name}
              setSelectedPayment={setSelectedPayment}
            />
          ))}
        </div>
      </div>
      <PrimaryButton
        additionalClass="border-t-2 border-t-primary disabled:opacity-50"
        onClick={handleOnclick}
        disabled={!addedParticipants.length}
      >
        {getButtonCTA()}
      </PrimaryButton>
    </div>
  )
}
