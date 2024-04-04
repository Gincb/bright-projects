import React, { Dispatch, FC, SetStateAction, useContext } from "react"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"
import { IFamilyMember } from "types/user"
import { Checkbox } from "components/buttons/Checkbox"

interface IParticapant {
  addedParticipants: Array<string>
  setAddedParticipants: Dispatch<SetStateAction<Array<string>>>
}

export const Participants: FC<IParticapant> = ({
  addedParticipants,
  setAddedParticipants,
}) => {
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)

  const handleCheckClick = (member: string) => {
    if (addedParticipants.some((participant) => participant === member)) {
      setAddedParticipants(
        addedParticipants.filter((participant) => participant !== member)
      )
    } else {
      setAddedParticipants([...addedParticipants, member])
    }
  }

  const handleAddNew = () => {
    setModalType("participant")
    setModalOpen(true)
  }

  return (
    <>
      <p className="text-h2-mob md:text-h2 mb-4">Select participants:</p>
      {!user.familyMembers ? (
        <p className="text-body-mob md:text-body mb-4 md:mb-6 text-center">
          No available participants
        </p>
      ) : (
        (user.familyMembers as Array<IFamilyMember>).map(
          ({ firstName, lastName }) => (
            <div
              key={firstName}
              className="flex flex-row items-center mb-2.5 md:mb-4"
            >
              <Checkbox
                onClick={() => handleCheckClick(`${firstName} ${lastName}`)}
                active={
                  (addedParticipants &&
                    addedParticipants.includes(`${firstName} ${lastName}`)) ||
                  false
                }
              />
              <p className="text-body-mob md:text-body text-primary font-semibold ml-2">
                {firstName} {lastName}
              </p>
            </div>
          )
        )
      )}
      <div
        className="flex flex-row justify-end items-center mt-2 pb-4 md:pb-6 mb-4 md:mb-6 border-b-2 border-primary cursor-pointer transition-[opacity] duration-300 hover:opacity-70"
        onClick={handleAddNew}
      >
        <p className="text-body-mob md:text-body text-primary font-semibold mr-2">
          Add new
        </p>
        <img src="/icons/add_new.svg" alt="add new member icon" />
      </div>
    </>
  )
}
