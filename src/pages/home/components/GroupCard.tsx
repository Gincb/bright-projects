import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IGroupDaysSchedule } from "types/group"
import { Storage } from "constants/data"
import { handleDateFormat, handleScheduleFormat } from "constants/general"
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
  const navigate = useNavigate()

  const handleRedirect = () => {
    localStorage.setItem(Storage.selectedGroup, externalKey)
    navigate(Routes.group)
  }

  return (
    <div className="flex flex-col justify-between w-full max-w-[25rem] border-2 border-primary rounded-3xl bg-white overflow-hidden">
      <div className="flex flex-col items-start gap-y-2.5 relative h-[16.25rem] p-4 md:p-6">
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
        <p className="text-h2-mob md:text-h2 mb-2.5">{name}</p>
        <p
          className="text-body-mob md:text-body text-ellipsis overflow-hidden h-[6.5625rem] md:h-[7.5rem] line-clamp-5 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-row items-start">
          <img src="/icons/calendar.svg" alt="calendar" />
          <p className="text-body-mob md:text-body ml-2">
            Duration:{" "}
            <span className="text-primary font-semibold">
              {handleDateFormat(startDate)} - {handleDateFormat(endDate)}
            </span>
          </p>
        </div>
        <div className="flex flex-row items-start">
          <img src="/icons/clock.svg" alt="clock" />
          <p className="text-body-mob md:text-body ml-2">
            Schedule:{" "}
            <span className="text-primary font-semibold">
              {handleScheduleFormat(schedule)}
            </span>
          </p>
        </div>
      </div>
      <PrimaryButton
        onClick={handleRedirect}
        additionalClass="border-t-2 border-t-primary"
      >
        Read more
      </PrimaryButton>
    </div>
  )
}
