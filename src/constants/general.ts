import { IGroupDaysSchedule } from "types/group"

export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const handleDateFormat = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

export const handleScheduleFormat = (schedule: Array<IGroupDaysSchedule>) => {
  const weekdayList = schedule
    ?.map(({ day }) => `${DAYS_OF_WEEK[Number(day) - 1]}`)
    .join(", ")
  const timeframe = `${schedule[0].start_time.slice(0, -3)} -
    ${schedule[0].end_time.slice(0, -3)}`

  return `${weekdayList} | ${timeframe}`
}
