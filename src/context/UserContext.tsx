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
  familyMembers: Array<IFamilyMember> | null
  setFamilyMembers: Dispatch<SetStateAction<Array<IFamilyMember> | null>>
}>({
  user: null,
  setUser: () => {},
  familyMembers: null,
  setFamilyMembers: () => {},
})

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [familyMembers, setFamilyMembers] =
    useState<Array<IFamilyMember> | null>(null)

  const value = useMemo(
    () => ({
      user,
      setUser,
      familyMembers,
      setFamilyMembers,
    }),
    [familyMembers, user]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
