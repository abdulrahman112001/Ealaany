import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import { Form, Formik } from "formik"
import StepperEngineering from "./StepperEngineering"

function Main() {
  const links = [
    {
      name: "Sign up",
      href: "/sign-up",
      main: true,
    },

    {
      name: "Engineering Office User",
      href: "/sign-up/engineering",
    },
  ]
  return (
    <div>
      <Breadcrumb links={links} />
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        <Form>
          <StepperEngineering />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
