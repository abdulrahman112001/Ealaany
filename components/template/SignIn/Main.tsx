import { Form, Formik } from "formik"
import Image from "next/image"
import MainData from "./MainData"

function Main() {
  return (
    <div className="grid  grid-cols-12 h-screen">
      <div className="col-span-12 md:col-span-8">
        <Formik initialValues={{}} onSubmit={() => { }}>
          <Form>
            <MainData />
          </Form>
        </Formik>
      </div>

      <div className="col-span-12 md:col-span-4 relative  mt-[-100px] z-0">
        <Image
          src="/images/login.png"
          alt="Sign in background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Main
