import React, { FC, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "context/UserContext"
import { IGroupDaysSchedule } from "types/group"
import { DAYS_OF_WEEK, handleDateFormat } from "constants/general"
import { Routes } from "constants/routes"
import { PrimaryButton } from "components/buttons/PrimaryButton"
import { TagCapsule } from "./TagCapsule"

interface IGroupCard {
  externalKey: string
  name: string
  description: string
  startDate: string
  endDate: string
  schedule: Array<IGroupDaysSchedule>
  ageGroup: Array<Number>
  level: string
  city: string
  image: string
}

export const GroupCard: FC<IGroupCard> = ({
  externalKey,
  name,
  description,
  startDate,
  endDate,
  schedule,
  ageGroup,
  level,
  city,
  image,
}) => {
  const { setSelectedGroup } = useContext(UserContext)
  const navigate = useNavigate()

  const handleRedirect = () => {
    setSelectedGroup(externalKey)
    navigate(Routes.group)
  }

  return (
    <div className="flex flex-col justify-between w-full max-w-[400px] border-2 border-primary rounded-3xl bg-white overflow-hidden">
      <div className="flex flex-col items-start gap-y-2.5 relative h-[260px] p-4 md:p-6">
        <TagCapsule tag={ageGroup.join(", ")} icon="icons/child.svg" />
        <TagCapsule tag={level} icon="icons/level.svg" />
        <TagCapsule tag={city} icon="icons/location.svg" />
        <img
          className="absolute top-0 left-0 object-cover h-full w-full rounded-t-3xl"
          src={image}
          alt="activity example"
        />
      </div>
      <div className="p-4 md:p-6">
        <p className="text-h2 mb-2.5">{name}</p>
        <p
          className="text-ellipsis overflow-hidden h-[120px] line-clamp-5 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-row items-start">
          <img src="/icons/calendar.svg" alt="calendar" />
          <p className="ml-2">
            Duration:{" "}
            <span className="text-primary font-semibold">
              {handleDateFormat(startDate)} - {handleDateFormat(endDate)}
            </span>
          </p>
        </div>
        <div className="flex flex-row items-start">
          <img src="/icons/clock.svg" alt="clock" />
          <p className="ml-2">
            Schedule:{" "}
            <span className="text-primary font-semibold">
              {schedule?.map(
                ({ day }, idx) =>
                  `${DAYS_OF_WEEK[Number(day) - 1]}${
                    idx < schedule.length - 1 ? ", " : ""
                  }`
              )}{" "}
              | {schedule[0].start_time.slice(0, -3)} -
              {schedule[0].end_time.slice(0, -3)}
            </span>
          </p>
        </div>
      </div>
      <PrimaryButton onClick={handleRedirect}>Read more</PrimaryButton>
    </div>
  )
}
