import { Stepper } from "@mantine/core"
import { useState } from "react"
import PersonalInformation from "./MainData/PersonalInformation"
import SecurityAndLogicDetails from "./MainData/SecurityAndLogicDetails"
import ContactInformation from "./MainData/ContactInformation"

function StepperMunicipality() {
    const [active, setActive] = useState(0)

    const getStepIconStyle = (step: number) => ({
        width: 10,
        height: 10,
        backgroundColor: "#00CCDC",
        borderRadius: "50%",
        opacity: active === step ? 1 : 0,
    })

    return (
        <div>
            <Stepper
                active={active}
                color="#00CCDC"
                onStepClick={setActive}
                orientation="vertical"
                styles={{
                    stepIcon: {
                        width: 25,
                        height: 25,
                        minWidth: 25,
                        minHeight: 25,

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
                    }
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
                    label="Contact information"
                >
                    <ContactInformation />
                </Stepper.Step>
            </Stepper>
        </div>
    )
}

export default StepperMunicipality
