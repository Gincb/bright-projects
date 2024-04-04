import React from "react"
import { useFetchData } from "hooks/useFetch"
import { BASE_URL, GROUP_APIS, Storage } from "constants/data"
import { IGroup } from "types/group"
import { Loader } from "components/loader/Loader"
import { Activity } from "./sections/Activity"
import { handleDateFormat, handleScheduleFormat } from "constants/general"
import { Subscription } from "./sections/Subscription"

export const Group = () => {
  const selectedGroup = localStorage.getItem(Storage.selectedGroup)
  const { data: group, isLoading } = useFetchData(
    GROUP_APIS.GROUP + selectedGroup
  )

  if (!group || isLoading) {
    return <Loader />
  }

  const {
    name,
    age_groups,
    difficulty_type,
    start_date,
    end_date,
    group_days_schedule,
    location,
    provider,
    activity,
    payment_intervals,
  }: IGroup = group

  console.log(payment_intervals)
  return !isLoading && group ? (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-min overflow-hidden py-2 md:py-6">
        {activity.images.map(({ id, path }, idx) => (
          <img
            key={id}
            className={`${idx > 0 ? "hidden" : "block"} sm:block`}
            src={BASE_URL + path}
            alt="activity example"
          />
        ))}
      </div>
      <p className="text-h1-mob md:text-h1 my-4 md:my-6">{name}</p>
      <div className="flex flex-col items-baseline md:flex-row gap-6 md:gap-8">
        <Activity
          ageGroup={age_groups.join(", ")}
          level={difficulty_type.name}
          duration={`${handleDateFormat(start_date)} - ${handleDateFormat(
            end_date
          )}`}
          schedule={handleScheduleFormat(group_days_schedule)}
          location={`${location.name}, ${location.city}, ${location.country}`}
          phone={provider.phone}
          email={provider.email}
          description={activity.description}
        />
        <Subscription paymentIntervals={payment_intervals} />
      </div>
    </>
  ) : (
    <Loader />
  )
}
