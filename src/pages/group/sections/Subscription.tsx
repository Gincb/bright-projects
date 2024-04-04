import React, { FC, useContext } from "react"
import { IPaymentIntervals } from "types/group"
import { SubscriptionOptions } from "./SubscriptionOptions"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { UserContext } from "context/UserContext"
import { Participants } from "./Participants"
import { ModalContext } from "context/ModalContext"

export const Subscription: FC<{
  paymentIntervals: Array<IPaymentIntervals>
}> = ({ paymentIntervals }) => {
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const { user, familyMembers } = useContext(UserContext)

  const getButtonCTA = () => {
    if (!user) return "Login to subscribe"
    if (!familyMembers) return "Add a participant"
    return "Enroll student"
  }

  const handleOnclick = () => {
    if (!user) {
      setModalType("login")
      setModalOpen(true)
    }
    if (user && !familyMembers) {
      setModalType("participant")
      setModalOpen(true)
    }
  }

  return (
    <div className="bg-white border-2 border-primary rounded-3xl overflow-hidden min-w-[18.75rem]">
      <div className="py-4 md:py-6 px-6 md:px-8">
        {user && <Participants />}
        <p className="text-h2-mob md:text-h2 mb-4">Subscription options:</p>
        <div className="flex flex-col gap-6">
          {paymentIntervals.map(({ id, name, group_price, lesson_count }) => (
            <SubscriptionOptions
              key={id}
              name={name}
              price={group_price}
              lessonCount={lesson_count}
            />
          ))}
        </div>
      </div>
      <PrimaryButton
        additionalClass="border-t-2 border-t-primary"
        onClick={handleOnclick}
      >
        {getButtonCTA()}
      </PrimaryButton>
    </div>
  )
}
