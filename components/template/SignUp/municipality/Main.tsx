import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import { Form, Formik } from "formik"
import StepperMunicipality from "./StepperMunicipality"

function Main() {
    const links = [
        {
            name: "Sign up",
            href: "/sign-up",
            main: true,
        },

        {
            name: "Municipality",
            href: "/sign-up/municipality",
        },
    ]
    return (
        <div>
            <Breadcrumb links={links} />
            <Formik initialValues={{}} onSubmit={(values) => { }}>
                <Form>
                    <StepperMunicipality />
                </Form>
            </Formik>
        </div>
    )
}

export default Main
