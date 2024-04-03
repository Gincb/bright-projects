import { IActivity } from "pages/group/sections/Activity"

export const getGroupInformation = ({
  ageGroup,
  level,
  duration,
  schedule,
  location,
  phone,
  email,
}: Partial<IActivity>) => [
  {
    icon: "/icons/level_primary.svg",
    name: "Age group and level",
    value: `${ageGroup} years old - ${level}`,
  },
  { icon: "/icons/calendar.svg", name: "Duration", value: duration },
  { icon: "/icons/clock.svg", name: "Schedule", value: schedule },
  { icon: "/icons/location_primary.svg", name: "Location", value: location },
  { icon: "/icons/phone.svg", name: "Phone", value: phone },
  { icon: "/icons/email.svg", name: "Email", value: email },
]
