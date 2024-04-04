import React, { FC } from "react"

export interface IOrder {
  name: string
  location: string
  duration: string
  schedule: string
  level: string
  ageGroup: string
  image: string
}

interface IOrderCard extends IOrder {
  participants: Array<string>
  price: number
}

export const OrderCard: FC<IOrderCard> = ({
  name,
  location,
  duration,
  schedule,
  ageGroup,
  level,
  participants,
  image,
  price,
}) => {
  return (
    <>
      <img
        className="object-cover max-w-full md:max-w-[20rem]  w-full"
        src={image}
        alt="activity example"
      />
      <div className="p-4 md:p-6">
        <p className="text-h2-mob md:text-h2 mb-2.5">{name}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-body-mob md:text-body">
              Age group:{" "}
              <span className="text-primary font-semibold">
                {ageGroup} years old
              </span>
            </p>
            <p className="text-body-mob md:text-body">
              Level: <span className="text-primary font-semibold">{level}</span>
            </p>
            <p className="text-body-mob md:text-body">
              Duration:{" "}
              <span className="text-primary font-semibold">{duration}</span>
            </p>
          </div>
          <div>
            <p className="text-body-mob md:text-body">
              Schedule:{" "}
              <span className="text-primary font-semibold">{schedule}</span>
            </p>
            <p className="text-body-mob md:text-body">
              Location:{" "}
              <span className="text-primary font-semibold">{location}</span>
            </p>
            <p className="text-body-mob md:text-body">
              Participants:{" "}
              <span className="text-primary font-semibold">
                {participants.join(", ")}
              </span>
            </p>
          </div>
        </div>
        <p className="text-h2-mob md:text-h2 mt-4 text-right">
          Price: <span className="text-primary">€{price.toFixed(2)}</span>
        </p>
      </div>
    </>
  )
}
