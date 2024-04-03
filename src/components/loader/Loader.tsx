import React from "react"

export const Loader = () => {
  return (
    <div className="bg-foreground w-full h-full z-50 fixed top-0 left-0">
      <div className="flex justify-center items-center h-full w-full absolute top-0 left-0">
        <div className="w-[5rem] h-[5rem] border-8 border-primary border-b-foreground rounded-full animate-spin" />
      </div>
    </div>
  )
}
