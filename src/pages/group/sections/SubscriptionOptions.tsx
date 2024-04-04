import { PAYMENT_INFORMATION } from "constants/information"
import React, { Dispatch, FC, SetStateAction } from "react"

interface ISubscriptionOptions {
  name: string
  price: number
  lessonCount: number
  userExists: boolean
  isActive: boolean
  setSelectedPayment: Dispatch<SetStateAction<{ name: string; price: number }>>
}

export const SubscriptionOptions: FC<ISubscriptionOptions> = ({
  name,
  price,
  lessonCount,
  userExists,
  isActive,
  setSelectedPayment,
}) => (
  <div
    className={`flex flex-row items-start transition-all duration-300 ${
      userExists ? "p-4 rounded-3xl border-2 border-primary" : "p-0 border-0"
    } ${isActive ? "bg-primary text-white" : ""}`}
  >
    {userExists ? (
      <img
        className="cursor-pointer"
        src={isActive ? "/icons/radio_active.svg" : "/icons/radio_inactive.svg"}
        alt="radio active icon"
        onClick={() => setSelectedPayment({ name, price })}
      />
    ) : (
      <></>
    )}
    <div className={`${userExists ? "ml-4" : "ml-0"}`}>
      <p
        className={`text-body-mob md:text-body  font-semibold mb-2.5 ${
          isActive ? "text-white" : "text-primary"
        }`}
      >
        {PAYMENT_INFORMATION[name]?.name ?? PAYMENT_INFORMATION.quarterly.name}
      </p>
      <p className="text-body-mob md:text-body mb-2.5">
        {PAYMENT_INFORMATION[name]?.description ??
          PAYMENT_INFORMATION.quarterly.description}
      </p>
      <div className="flex flex-row justify-between items-end">
        <p
          className={`text-body-mob md:text-body  font-semibold ${
            isActive ? "text-white" : "text-primary"
          }`}
        >
          {lessonCount} lessons
        </p>
        <p
          className={`text-h3-mob md:text-h3  font-semibold ${
            isActive ? " text-white" : "text-primary"
          }`}
        >
          €{price.toFixed(2)} /{" "}
          <span className="text-body-mob md:text-body">
            {PAYMENT_INFORMATION[name]?.interval ??
              PAYMENT_INFORMATION.quarterly.interval}
          </span>
        </p>
      </div>
    </div>
  </div>
)
