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

export const PAYMENT_INFORMATION: {
  [key: string]: { name: string; description: string; interval: string }
} = {
  "one-month": {
    name: "Monthly payment",
    description:
      "Charged every month on the 3rd of the month. Initial payment is for 1 month upfront; subsequent payments are adjusted every month for the actual number of lessons.",
    interval: "mon",
  },
  quarterly: {
    name: "Quarterly payment",
    description:
      "Charged every 3 months on the 3rd of the month. Initial payment is for 3 months upfront; subsequent payments are adjusted every 3 months for the actual number of lessons.",
    interval: "3 months",
  },
}
