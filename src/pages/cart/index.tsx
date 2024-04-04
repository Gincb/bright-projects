import React, { useState } from "react"
import { Storage } from "constants/data"
import { OrderList } from "./sections/OrderList"
import { PrimaryButton } from "components/buttons/PrimaryButton"

export const Cart = () => {
  const cart = JSON.parse(localStorage.getItem(Storage.cart) as string)
  const [cartState, setCartState] = useState(cart || [])

  const handleClear = () => {
    setCartState([])
    localStorage.setItem(Storage.cart, JSON.stringify([]))
    window !== undefined && window.dispatchEvent(new Event("storage"))
  }

  return !cartState.length ? (
    <div>
      <p className="text-h1-mob md:text-h1 my-4 md:my-6">No items in cart</p>
    </div>
  ) : (
    <div>
      <p className="text-h1-mob md:text-h1 my-4 md:my-6">Your cart</p>
      <OrderList products={cartState} setProducts={setCartState} />
      <div className="flex flex-row justify-between items-end">
        <PrimaryButton
          additionalClass="max-w-full md:max-w-max rounded-lg bg-rose-600"
          onClick={handleClear}
        >
          Clear cart
        </PrimaryButton>
        <div className="flex flex-col md:flex-row justify-end items-end gap-4 md:gap-8 pt-8 mt-8">
          <p className="text-h2-mob md:text-h2 text-right">
            Subtotal:{" "}
            <span className="text-primary">
              €
              {cartState
                .reduce(
                  (
                    n: number,
                    { paymentMethod }: { paymentMethod: { price: number } }
                  ) => n + paymentMethod.price,
                  0
                )
                .toFixed(2)}
            </span>
          </p>
          <PrimaryButton additionalClass="max-w-full md:max-w-max rounded-lg">
            Checkout
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
