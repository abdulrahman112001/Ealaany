import { Button } from "@/components/atoms/buttons/Button"
import GoogleSignInButton from "@/components/atoms/buttons/GoogleSignInButton"
import SignLink from "@/components/atoms/buttons/SignLink"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import { Container } from "@mantine/core"
import { Form, Formik } from "formik"
import Image from "next/image"
import Link from "next/link"
import MainData from "./MainData"

function Main() {
  return (
    <div className="grid  grid-cols-12 h-screen">
      <div className="col-span-12 md:col-span-8">
        <Formik initialValues={{}} onSubmit={() => {}}>
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
