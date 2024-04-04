import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { Routes } from "constants/routes"
import { PageLayout } from "layouts/PageLayout"
import { ModalContextProvider } from "context/ModalContext"
import { Home } from "pages/home"
import { Group } from "pages/group"
import { Cart } from "pages/cart"

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
      {
        path: Routes.cart,
        element: <Cart />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  </React.StrictMode>
)
