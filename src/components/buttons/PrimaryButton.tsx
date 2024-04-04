import React, { ButtonHTMLAttributes, FC } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClass?: string
}

export const PrimaryButton: FC<IButton> = ({
  children,
  additionalClass,
  ...props
}) => (
  <button
    className={`bg-primary duration-300 text-white font-semibold p-4 w-full hover:bg-white hover:text-primary disabled:hover:bg-primary disabled:hover:text-white transition-colors ${additionalClass}`}
    {...props}
  >
    {children}
  </button>
)
