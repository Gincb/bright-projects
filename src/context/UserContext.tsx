/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react"
import { IFamilyMember, IUser } from "../types/userContext"

export const UserContext = createContext<{
  user: IUser | null
  setUser: Dispatch<SetStateAction<IUser | null>>
  familyMembers: IFamilyMember | null
  setFamilyMembers: Dispatch<SetStateAction<IFamilyMember | null>>
  selectedGroup: string | null
  setSelectedGroup: Dispatch<SetStateAction<string | null>>
}>({
  user: null,
  setUser: () => {},
  familyMembers: null,
  setFamilyMembers: () => {},
  selectedGroup: null,
  setSelectedGroup: () => {},
})

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [familyMembers, setFamilyMembers] = useState<IFamilyMember | null>(null)
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const value = useMemo(
    () => ({
      user,
      setUser,
      familyMembers,
      setFamilyMembers,
      selectedGroup,
      setSelectedGroup,
    }),
    [familyMembers, selectedGroup, user]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
