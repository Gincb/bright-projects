import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { UserContextProvider } from "./context/UserContext"
import { Container } from "layouts/Container"
import { Routes } from "constants/routes"
import { Home } from "pages/home"
import { Group } from "pages/group"

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
  },
  {
    path: Routes.group,
    element: <Group />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </UserContextProvider>
  </React.StrictMode>
)
