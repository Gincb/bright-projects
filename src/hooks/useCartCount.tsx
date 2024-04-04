import { useEffect, useState } from "react"
import { Storage } from "constants/data"

export const useCartCount = () => {
  const cart = JSON.parse(localStorage.getItem(Storage.cart) as string)
  const [count, setCount] = useState(cart?.length || 0)

  useEffect(() => {
    const listenStorageChange = () => {
      if (!localStorage.getItem(Storage.cart)) {
        setCount(0)
      } else {
        setCount(
          JSON.parse(localStorage.getItem(Storage.cart) as string).length
        )
      }
    }
    window.addEventListener("storage", listenStorageChange)
    return () =>
      window.removeEventListener("storage", () => listenStorageChange)
  }, [])

  return { count }
}
