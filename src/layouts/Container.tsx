import React, { FC, ReactNode } from "react"

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="max-w-[78rem] p-4 md:p-6 [&:nth-child(1)]:mx-auto">
    {children}
  </div>
)
