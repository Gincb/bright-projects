import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react"

export const ModalContext = createContext<{
  modalType: "login" | "participant" | null
  setModalType: Dispatch<SetStateAction<"login" | "participant" | null>>
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}>({
  modalType: null,
  setModalType: () => {},
  modalOpen: false,
  setModalOpen: () => {},
})

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [modalType, setModalType] = useState<"login" | "participant" | null>(
    null
  )
  const [modalOpen, setModalOpen] = useState(false)

  const value = useMemo(
    () => ({
      modalType,
      setModalType,
      modalOpen,
      setModalOpen,
    }),
    [modalOpen, modalType]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
