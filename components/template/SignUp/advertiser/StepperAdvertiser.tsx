import { Stepper } from "@mantine/core"
import { useState } from "react"
import IndividualInformation from "./MainData/IndividualInformation"
import PersonalInformation from "./MainData/PersonalInformation"
import SecurityAndLogicDetails from "./MainData/SecurityAndLogicDetails"

function StepperAdvertiser() {
  const [active, setActive] = useState(0)

  const getStepIconStyle = (step: number) => ({
    width: 14,
    height: 14,
    backgroundColor: "#00CCDC",
    borderRadius: "50%",
    opacity: active === step ? 1 : 0,
  })

  return (
    <div className="ml-10">
      <Stepper
        active={active}
        color="#00CCDC"
        onStepClick={setActive}
        orientation="vertical"
        styles={{
          stepIcon: {
            width: 40,
            height: 40,
            minWidth: 40,
            minHeight: 40,

            backgroundColor: "transparent",
            borderColor: "#606060",
            borderRadius: "50%",
            border: "2px solid gray",
            transition: "border-color 0.3s",
          },
          stepLabel: {
            fontSize: 18,
            fontWeight: 500,
            alignItems: "center",
          },
          stepDescription: {
            fontSize: 12,
            color: "#00CCDC",
          },
          root: {
            display: "flex",
              justifyContent: "space-between",
            
          },
          steps: {
            marginTop: 100,
            },
          
        }}
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
          label="individual/corporate information"
        >
          <IndividualInformation />
        </Stepper.Step>
      </Stepper>
    </div>
  )
}

export default StepperAdvertiser
