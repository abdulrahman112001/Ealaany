import { stepperStyles } from "@/utils/const"
import { Stepper } from "@mantine/core"
import { useState } from "react"
import CorporateInformation from "./MainData/CorporateInformation"
import PersonalInformation from "./MainData/PersonalInformation"
import SecurityAndLogicDetails from "./MainData/SecurityAndLogicDetails"

function StepperInvestor() {
  const [active, setActive] = useState(0)

  const getStepIconStyle = (step: number) => ({
    width: 14,
    height: 14,
    backgroundColor: "#00CCDC",
    borderRadius: "50%",
    opacity: active === step ? 1 : 0,
  })

  return (
    <div className="md:ml-10 stepper-root">
      <Stepper
        active={active}
        color="#00CCDC"
        onStepClick={setActive}
        orientation="vertical"
        //@ts-ignore
        styles={stepperStyles}
      >
        <Stepper.Step
          style={{
            color: "#00CCDC",
            borderColor: "#00CCDC",
            alignItems: "center",
            minHeight: 60,
          }}
          icon={<div style={getStepIconStyle(0)} />}
          label="Personal Information"
        >
          <PersonalInformation />
        </Stepper.Step>
        <Stepper.Step
          style={{
            alignItems: "center",
            minHeight: 60,
          }}
          icon={<div style={getStepIconStyle(1)} />}
          label="Security and Login Details"
        >
          <SecurityAndLogicDetails />
        </Stepper.Step>
        <Stepper.Step
          style={{
            alignItems: "center",
            minHeight: 60,
          }}
          icon={<div style={getStepIconStyle(2)} />}
          label="Corporate information"
        >
          <CorporateInformation />
        </Stepper.Step>
      </Stepper>
    </div>
  )
}

export default StepperInvestor
