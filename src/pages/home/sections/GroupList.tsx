import React, { FC } from "react"
import { IGroup } from "types/group"
import { GroupCard } from "../components/GroupCard"

export const GroupList: FC<{ groups: Array<IGroup> | null }> = ({ groups }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center flex-wrap gap-4 sm:gap-6">
    {groups?.map(
      ({
        external_key,
        name,
        activity,
        start_date,
        end_date,
        group_days_schedule,
        age_groups,
        difficulty_type,
        capacity,
        attendees,
        location,
        image,
      }) => (
        <GroupCard
          key={name}
          externalKey={external_key}
          name={name}
          description={activity.description}
          startDate={start_date}
          endDate={end_date}
          schedule={group_days_schedule}
          ageGroup={age_groups}
          level={difficulty_type.name}
          spotsLeft={capacity - attendees || 0}
          city={location.city}
          image={image}
        />
      )
    )}
  </div>
)
