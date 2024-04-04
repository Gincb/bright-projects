import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { UserContextProvider } from "./context/UserContext"
import { Routes } from "constants/routes"
import { Home } from "pages/home"
import { Group } from "pages/group"
import { PageLayout } from "layouts/PageLayout"
import { ModalContextProvider } from "context/ModalContext"

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: Routes.home,
        element: <Home />,
      },
      {
        path: Routes.group,
        element: <Group />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
