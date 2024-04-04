import React, { Dispatch, FC, SetStateAction } from "react"
import { IOrder, OrderCard } from "pages/cart/sections/OrderCard"
import { Storage } from "constants/data"

interface IProductList {
  participants: Array<string>
  activityInformation: IOrder | null
  paymentMethod: { price: number }
  uid: string
}

export const OrderList: FC<{
  products: Array<IProductList>
  setProducts: Dispatch<SetStateAction<Array<IProductList>>>
}> = ({ products, setProducts }) => {
  const handleDelete = (uid?: string) => {
    const filterProducts = products.filter((item) => item?.uid !== uid)
    setProducts(filterProducts)
    localStorage.setItem(Storage.cart, JSON.stringify(filterProducts))
    window !== undefined && window.dispatchEvent(new Event("storage"))
  }

  return (
    <div className="flex flex-col flex-wrap gap-4 sm:gap-6">
      {products?.map(
        (product) =>
          product?.activityInformation &&
          product?.participants &&
          product?.paymentMethod && (
            <div
              key={product?.uid}
              className="flex flex-col md:flex-row gap-4 relative max-w-full md:w-full border-2 border-primary rounded-3xl overflow-hidden bg-white"
            >
              <div
                className="absolute top-2 right-2 rounded-full bg-rose-600 p-2 cursor-pointer transition-[opacity] duration-300 hover:opacity-70"
                onClick={() => handleDelete(product?.uid)}
              >
                <img src="/icons/trash.svg" alt="delete icon" />
              </div>
              <OrderCard
                participants={product?.participants}
                price={product?.paymentMethod?.price}
                {...product.activityInformation}
              />
            </div>
          )
      )}
    </div>
  )
}
