import { Button } from "@/components/atoms/buttons/Button"
import GoogleSignUpButton from "@/components/atoms/buttons/GoogleSignUpButton"
import LoginLink from "@/components/atoms/buttons/LoginLink"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField"
import { Container } from "@mantine/core"
import Image from "next/image"

function PersonalInformation() {
  return (
    <div className="mr-10">
      <Container>
        <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
          Personal Information
        </h2>

        <div className="bg-white rounded-3xl w-[650px] p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <BaseInputField
                label="Full Name"
                required
                placeholder="Your full name"
                leftSection={
                  <Image
                    src="/images/profile.png"
                    alt="user"
                    width={20}
                    height={20}
                  />
                }
                name="fullName"
              />
            </div>

            <div>
              <BaseInputField
                label="Your Email"
                required
                placeholder="Your E-mail"
                leftSection={
                  <Image
                    src="/images/Emaail.png"
                    alt="email"
                    width={20}
                    height={20}
                  />
                }
                name="email"
              />
            </div>

            <div>
              <PhoneNumberField
                label="phone number"
                required
                value={""} onChange={() => { }} />
            </div>

            <div>
              <BaseInputField
                label="User Name"
                required
                placeholder="Your login name"
                leftSection={
                  <Image
                    src="/images/username.png"
                    alt="username"
                    width={20}
                    height={20}
                  />
                }
                name="userName"
              />
            </div>

            <div className="col-span-2">
              <Button action={() => console.log("Submit clicked")}>Submit</Button>
            </div>
          </div>

          <p className="relative font-poppins text-center text-[#636363] text-sm p-4 before:content-[''] before:absolute before:w-[250px] before:h-[1px] before:bg-[#EAEAEA] before:left-0 before:top-1/2 after:content-[''] after:absolute after:w-[250px] after:h-[1px] after:bg-[#EAEAEA] after:right-0 after:top-1/2">
            Or
          </p>
          <GoogleSignUpButton />
          <LoginLink />
        </div>
      </Container>
    </div>
  )
}

export default PersonalInformation
