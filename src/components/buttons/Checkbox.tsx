import React, { FC } from "react"

export const Checkbox: FC<{ active: boolean; onClick: () => void }> = ({
  active,
  onClick,
}) => (
  <div
    className={`w-[2rem] h-[2rem] flex justify-center items-center border-2 border-primary rounded-md cursor-pointer ${
      active ? "bg-primary" : "bg-white"
    }`}
    onClick={onClick}
  >
    {active ? <img src="/icons/checkmark.svg" alt="checkmark icon" /> : <></>}
  </div>
)
