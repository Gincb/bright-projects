import { PAYMENT_INFORMATION } from "constants/information"
import React, { FC } from "react"

interface ISubscriptionoptions {
  name: string
  price: number
  lessonCount: number
}

export const SubscriptionOptions: FC<ISubscriptionoptions> = ({
  name,
  price,
  lessonCount,
}) => (
  <div>
    <p className="text-body-mob md:text-body text-primary font-semibold mb-2.5">
      {PAYMENT_INFORMATION[name].name ?? name}
    </p>
    {PAYMENT_INFORMATION[name].description ? (
      <p className="text-body-mob md:text-body mb-2.5">
        {PAYMENT_INFORMATION[name].description}
      </p>
    ) : (
      <></>
    )}
    <div className="flex flex-row justify-between items-end">
      <p className="text-body-mob md:text-body text-primary font-semibold">
        {lessonCount} lessons
      </p>
      <p className="text-h3-mob md:text-h3 text-primary font-semibold">
        €{price.toFixed(2)} /{" "}
        <span className="text-body-mob md:text-body">
          {PAYMENT_INFORMATION[name].interval ?? "mon"}
        </span>
      </p>
    </div>
  </div>
)
