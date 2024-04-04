import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "../components/wrappers/Container"
import { Routes } from "constants/routes"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"
import { useCartCount } from "hooks/useCartCount"

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)
  const { count } = useCartCount()
  const { setModalType, setModalOpen } = useContext(ModalContext)

  const hideBackBtn = pathname === Routes.home

  const handleOnclick = () => {
    setModalType("login")
    setModalOpen(true)
  }

  return (
    <div className="bg-foreground">
      <Container>
        <div
          className={`flex flex-row ${
            hideBackBtn ? "justify-end" : "justify-between"
          }`}
        >
          {!hideBackBtn && (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <img src="/icons/back.svg" alt="back arrow" />
              <p className="ml-2 font-semibold">Back</p>
            </div>
          )}

          {!user && (
            <PrimaryButton
              additionalClass="rounded-lg max-w-[7.875rem] max-h-[3rem] py-3"
              onClick={handleOnclick}
            >
              Login
            </PrimaryButton>
          )}
          {user && (
            <div className="flex flex-row gap-6 md:gap-8">
              <div className="flex items-center justify-center p-2 bg-white rounded-full w-[3rem] h-[3rem]">
                <p className="text-h2-mob md:text-h2 text-primary font-semibold cursor-default">
                  {user.firstName.slice(0, 1)}
                  {user.lastName.slice(0, 1)}
                </p>
              </div>
              <div
                className="relative w-[3rem] h-[3rem] cursor-pointer transition-[opacity] duration-300 hover:opacity-70"
                onClick={() => navigate(Routes.cart)}
              >
                <img
                  className="absolute bottom-0 left-0 z-0"
                  src="/icons/cart.svg"
                  alt="cart icon"
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-[1.75rem] h-[1.75rem] z-10">
                  <p className="text-body text-primary font-semibold">
                    {count || 0}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
