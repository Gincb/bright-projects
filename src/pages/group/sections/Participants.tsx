import React, { FC, useContext, useEffect, useState } from "react"
import { UserContext } from "context/UserContext"
import { Checkbox } from "components/buttons/Checkbox"
import { ModalContext } from "context/ModalContext"

export const Participants = () => {
  const { familyMembers } = useContext(UserContext)
  const { setModalType, setModalOpen } = useContext(ModalContext)
  const [addedParticipants, setAddedParticipants] = useState<
    Array<{ member: string; added: boolean }>
  >([])

  const handleCheckClick = (firstName: string, lastName: string) => {
    if (
      addedParticipants &&
      addedParticipants.find(
        (participant) =>
          participant && participant.member === `${firstName} ${lastName}`
      )
    ) {
      setAddedParticipants(
        addedParticipants.map((participant) =>
          participant.member === `${firstName} ${lastName}`
            ? { ...participant, added: !participant.added }
            : participant
        )
      )
    } else {
      setAddedParticipants([
        ...addedParticipants,
        { member: `${firstName} ${lastName}`, added: true },
      ])
    }
  }

  const handleAddNew = () => {
    setModalType("participant")
    setModalOpen(true)
  }

  useEffect(() => {
    localStorage.setItem(
      "participants",
      addedParticipants
        .map((member) => (member.added ? member.member : ""))
        .toString()
    )
  }, [addedParticipants])
  console.log(addedParticipants)
  return (
    <>
      <p className="text-h2-mob md:text-h2 mb-4">Select participants:</p>
      {!familyMembers ? (
        <p className="text-body-mob md:text-body mb-4 md:mb-6 text-center">
          No available participants
        </p>
      ) : (
        familyMembers.map(({ firstName, lastName }) => (
          <div
            key={firstName}
            className="flex flex-row items-center mb-2.5 md:mb-4"
          >
            <Checkbox
              onClick={() => handleCheckClick(firstName, lastName)}
              active={
                addedParticipants.find(
                  (participant) =>
                    participant &&
                    participant.member === `${firstName} ${lastName}`
                )?.added || false
              }
            />
            <p className="text-body-mob md:text-body text-primary font-semibold ml-2">
              {firstName} {lastName}
            </p>
          </div>
        ))
      )}
      <div
        className="flex flex-row justify-end items-center mt-2 pb-4 md:pb-6 mb-4 md:mb-6 border-b-2 border-primary"
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
