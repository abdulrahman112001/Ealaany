import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import { Form, Formik } from "formik"
import StepperBeneficiary from "./StepperBeneficiary"

function Main() {
    const links = [
        {
            name: "Sign up",
            href: "/sign-up",
            main: true,
        },

        {
            name: "beneficiary",
            href: "/sign-up/beneficiary",
        },
    ]
    return (
        <div>
            <Breadcrumb links={links} />
            <Formik initialValues={{}} onSubmit={(values) => { }}>
                <Form>
                    <StepperBeneficiary />
                </Form>
            </Formik>
        </div>
    )
}

export default Main
