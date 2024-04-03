import React from "react"
import { Outlet } from "react-router-dom"
import { Container } from "components/wrappers/Container"
import { Header } from "./Header"

export const PageLayout = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
)
