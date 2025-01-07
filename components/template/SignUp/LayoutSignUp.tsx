import React, { ReactNode } from "react"
import Layout from "../../organisms/Layout"
import PlateFormBanner from "./PlateFormBanner"
interface LayoutSignUpProps {
  children: ReactNode
}

function LayoutSignUp({ children }: LayoutSignUpProps) {
  return (
    <div className="">
      <PlateFormBanner />
      <div className="p-4 md:p-10">
      {children}

      </div>
    </div>
  )
}

export default LayoutSignUp
