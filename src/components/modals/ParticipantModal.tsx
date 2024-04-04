import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { ModalContext } from "context/ModalContext"
import { UserContext } from "context/UserContext"
import { useDisableBackScroll } from "hooks/useDisableScroll"
import { PrimaryButton } from "components/buttons/PrimaryButton"

export const ParticipantModal = () => {
  const { modalType, setModalType, modalOpen, setModalOpen } =
    useContext(ModalContext)
  const { familyMembers, setFamilyMembers } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useDisableBackScroll(modalOpen && modalType === "participant")

  if (!modalOpen || modalType !== "participant") return <></>

  const onSubmit = (data: any) => {
    if (
      familyMembers?.length &&
      !Boolean(familyMembers.find(
        (member) =>
          member.firstName === data.firstName &&
          member.lastName === data.lastName
      ))
    ) {
      setFamilyMembers([...familyMembers, { ...data }])
    }
    setModalOpen(false)
    setModalType(null)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white border-2 border-primary rounded-3xl max-w-full md:max-w-[25rem] w-full py-4 px-6 md:py-6 md:px-8">
        <p className="text-h2-mob md:text-h2 text-primary mb-6">
          Add a family member!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-h3-mob md:text-h3 font-semibold mb-2">
              First name
            </label>
            <input
              className="appearance-none outline-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-colors duration-300 focus:border-primary"
              id="firstName"
              type="text"
              placeholder="First name*"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-body-mob text-red-500 mt-2">
                This is a required field
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-h3-mob md:text-h3 font-semibold mb-2">
              Last name
            </label>
            <input
              className="appearance-none outline-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-colors duration-300 focus:border-primary"
              id="lastName"
              type="text"
              placeholder="Last name*"
              {...register("lastName", { required: true })}
            />
            {errors.password && (
              <p className="text-body-mob text-red-500 mt-2">
                This is a required field
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <PrimaryButton type="submit" additionalClass="rounded-lg">
              Add
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  )
}
