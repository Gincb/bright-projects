import React, { useContext } from "react"
import { UserContext } from "context/UserContext"
import { useFetchData } from "hooks/useFetch"
import { GROUP_APIS } from "constants/apis"

export const Group = () => {
  const { selectedGroup } = useContext(UserContext)
  // const { data: group, isLoading } = useFetchData(GROUP_APIS.PUBLISHED_GROUPS)
  console.log(selectedGroup)
  return (
    <>
      <p className="text-h1-mob md:text-h1 my-4">Group activities</p>
    </>
  )
}
