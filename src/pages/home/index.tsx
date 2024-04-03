import React from "react"
import { GroupList } from "./sections/GroupList"
import { GROUP_APIS } from "constants/apis"
import { useFetchData } from "hooks/useFetch"
import { Loader } from "components/loader/Loader"

export const Home = () => {
  const { data: groups, isLoading } = useFetchData(GROUP_APIS.PUBLISHED_GROUPS)

  return !isLoading && groups ? (
    <div>
      <p className="text-h1-mob md:text-h1 my-4 md:my-6">Group activities</p>
      <GroupList groups={groups} />
    </div>
  ) : (
    <Loader />
  )
}
