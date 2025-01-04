import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import { Form, Formik } from "formik"
import StepperInvestor from "./StepperInvestor"

function Main() {
  const links = [
    {
      name: "Sign up",
      href: "/sign-up",
      main: true,
    },

    {
      name: "Investor",
      href: "/sign-up/investor",
    },
  ]
  return (
    <div>
      <Breadcrumb links={links} />
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        <Form>
          <StepperInvestor />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
