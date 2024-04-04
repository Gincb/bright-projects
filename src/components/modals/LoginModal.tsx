import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { ModalContext } from "context/ModalContext"
import { useDisableBackScroll } from "hooks/useDisableScroll"
import { TEST_USER } from "constants/general"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { Storage } from "constants/data"

export const LoginModal = () => {
  const { modalType, setModalType, modalOpen, setModalOpen } =
    useContext(ModalContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [showIncorrectLogin, setShowIncorrectLogin] = useState(false)

  useDisableBackScroll(modalOpen && modalType === "login")

  if (!modalOpen || modalType !== "login") return <></>

  const handleClose = () => {
    setModalOpen(false)
    setModalType(null)
    reset()
  }

  const onSubmit = (data: any) => {
    if (
      data.email !== process.env.REACT_APP_TEST_USER_EMAIL ||
      data.password !== process.env.REACT_APP_TEST_USER_PASSWORD
    ) {
      setShowIncorrectLogin(true)
    } else {
      localStorage.setItem(Storage.user, JSON.stringify(TEST_USER))
      handleClose()
    }
  }

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full">
      <div
        className="fixed top-0 left-0 z-40 w-full h-full bg-black/50"
        onClick={handleClose}
      />
      <div className="bg-white border-2 border-primary rounded-3xl max-w-full md:max-w-[25rem] w-full py-4 px-6 md:py-6 md:px-8 z-50">
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-h2-mob md:text-h2 text-primary">Welcome back!</p>
          <div className="cursor-pointer" onClick={handleClose}>
            <img src="/icons/close.svg" alt="close icon" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-h3-mob md:text-h3 font-semibold mb-2">
              Email
            </label>
            <input
              className="appearance-none outline-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-colors duration-300 focus:border-primary"
              id="email"
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <p className="text-body-mob text-red-500 mt-2">
                Email is required and must be valid
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-h3-mob md:text-h3 font-semibold mb-2">
              Password
            </label>
            <input
              className="appearance-none outline-none border rounded w-full py-2 px-3 text-gray-700 leading-tight transition-colors duration-300 focus:border-primary"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-body-mob text-red-500 mt-2">
                Password is required
              </p>
            )}
          </div>
          {showIncorrectLogin && (
            <p className="text-body-mob text-red-500 mb-2">
              Email and password do not match
            </p>
          )}
          <div className="flex items-center justify-between">
            <PrimaryButton type="submit" additionalClass="rounded-lg">
              Login
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  )
}
