import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import { Form, Formik } from "formik"
import StepperAdvertiser from "./StepperAdvertiser"

function Main() {
  const links = [
    {
      name: "Sign up",
      href: "/sign-up",
      main: true,
    },

    {
      name: "Advertiser",
      href: "/sign-up/advertiser",
    },
  ]
  return (
    <div>
      <Breadcrumb links={links} />
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        <Form>
          <StepperAdvertiser />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
