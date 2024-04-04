import React from "react"
import { Outlet } from "react-router-dom"
import { Container } from "components/wrappers/Container"
import { Header } from "./Header"
import { LoginModal } from "components/modals/LoginModal"
import { ParticipantModal } from "components/modals/ParticipantModal"

export const PageLayout = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <LoginModal />
    <ParticipantModal />
  </>
)
