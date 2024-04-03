import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "../components/wrappers/Container"
import { Routes } from "constants/routes"
import { UserContext } from "context/UserContext"
import { PrimaryButton } from "components/buttons/PrimaryButton"

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useContext(UserContext)

  const hideBackBtn = pathname === Routes.home

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
            <PrimaryButton additionalClass="rounded-lg max-w-[7.875rem]">
              Login
            </PrimaryButton>
          )}
        </div>
      </Container>
    </div>
  )
}
