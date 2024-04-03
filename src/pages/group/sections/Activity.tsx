import React, { FC } from "react"
import { getGroupInformation } from "constants/information"

export interface IActivity {
  ageGroup: string
  level: string
  duration: string
  schedule: string
  location: string
  phone: string
  email: string
  description: string
}

export const Activity: FC<IActivity> = ({
  ageGroup,
  level,
  duration,
  schedule,
  location,
  phone,
  email,
  description,
}) => {
  return (
    <div className="bg-white border-2 border-primary rounded-3xl py-4 md:py-6 px-6 md:px-8">
      {getGroupInformation({
        ageGroup,
        level,
        duration,
        schedule,
        location,
        phone,
        email,
      }).map(({ icon, name, value }, idx) => (
        <div
          key={name}
          className={`flex flex-row items-start ${
            idx === 2 ? "md:mb-6 mb-8" : "md:mb-2 mb-2.5"
          }`}
        >
          <img className="fill-primary" src={icon} alt="information icon" />
          <p className="ml-2">
            {name}: <span className="text-primary font-semibold">{value}</span>
          </p>
        </div>
      ))}
      <p className="text-h2-mob md:text-h2 mt-6 md:mt-8 mb-4">Description</p>
      <div
        className="text-body-mob md:text-body [&_ol]:list-decimal [&_ol]:list-inside [&_p]:mb-2 [&_span]:font-semibold"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
