import React, { FC } from "react"

export const TagCapsule: FC<{ tag: string; icon: string }> = ({
  tag,
  icon,
}) => (
  <div className="flex flex-row bg-primary rounded-3xl py-2 px-4">
    <img src={icon} alt="indicating tag" />
    <p className="text-body-mob md:text-body text-white ml-2">{tag}</p>
  </div>
)
