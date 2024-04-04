import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "../components/wrappers/Container"
import { Routes } from "constants/routes"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { ModalContext } from "context/ModalContext"
import { Storage } from "constants/data"

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = JSON.parse(localStorage.getItem(Storage.user) as string)
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
              additionalClass="rounded-lg max-w-[7.875rem]"
              onClick={handleOnclick}
            >
              Login
            </PrimaryButton>
          )}
        </div>
      </Container>
    </div>
  )
}
