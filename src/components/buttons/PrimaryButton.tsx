import React, { ButtonHTMLAttributes, FC } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  maxWidth?: string
  rounded?: boolean
}

export const PrimaryButton: FC<IButton> = ({
  children,
  maxWidth,
  rounded = false,
  ...props
}) => (
  <button
    className={`bg-primary border-t-2 border-t-primary duration-300 text-white font-semibold p-4 w-full hover:bg-white hover:text-primary transition-colors ${
      rounded ?? "rounded-lg"
    } max-w-[${maxWidth}]`}
    {...props}
  >
    {children}
  </button>
)
