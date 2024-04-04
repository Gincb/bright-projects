import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react"

export const CartContext = createContext<{
  participants: Array<string | null>
  setParticipants: Dispatch<SetStateAction<Array<string | null>>>
}>({
  participants: [],
  setParticipants: () => {},
})

export const CartContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [participants, setParticipants] = useState<Array<string | null>>([])

  const value = useMemo(
    () => ({
      participants,
      setParticipants,
    }),
    [participants]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
