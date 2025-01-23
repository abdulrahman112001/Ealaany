import { Button } from "@/components/atoms/buttons/Button"
import LoginLink from "@/components/atoms/buttons/LoginLink"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import VeirfyWithFeild from "@/components/atoms/Select/VeirfyWithFeild"
import { Checkbox, Container } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiExternalLink } from "react-icons/fi"
import OTPPage from "../../otp/OTPPage"

function SecurityAndLogicDetails() {
  const router = useRouter()
  const [showOtp, setShowOtp] = useState(false)


  return (
    showOtp === false ? (
      <div className="md:mr-10">
        <Container>
          <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
            Security and Login Details
          </h2>
          <div className="bg-white rounded-3xl max-w-[650px] p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <BaseInputField
                  label="Password"
                  required
                  placeholder="Your password"
                  leftSection={
                    <Image
                      src="/images/key.png"
                      alt="password"
                      width={20}
                      height={20}
                    />
                  }
                  name="password"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <BaseInputField
                  label="Confirm Password"
                  required
                  placeholder="Confirm your password"
                  leftSection={
                    <Image
                      src="/images/key.png"
                      alt="password"
                      width={20}
                      height={20}
                    />
                  }
                  name="confirmPassword"
                />
              </div>
              <div className="col-span-2 ">
                <label
                  className="ms-[4px] text-[#979C9E] font-[400]"
                  htmlFor=""
                >
                  Verify with *
                </label>
                <VeirfyWithFeild />
              </div>
              <div className="col-span-2 ">
                <Checkbox
                  label="Send me helpful emails on tips on how to use the platform"
                  className="font-poppins text-sm text-black mb-2"
                />
                <Checkbox
                  label={
                    <>
                      <p className="font-poppins text-md sm:text-sm lg:text-base">
                        Yes, I understand and agree to the
                      </p>
                      <span className="flex flex-wrap text-sm sm:text-xs lg:text-base text-[#00CCDC]">
                        Terms and Conditions agreement
                        <FiExternalLink className="mt-1 mx-1" />
                        <span className="font-semibold mx-1 text-black">and</span>
                        privacy policy
                        <FiExternalLink className="mt-1 mx-1" />
                      </span>
                    </>
                  }
                />

              <div className="col-span-2 mt-12">
                <Button action={() => setShowOtp(true)}>Send Code</Button>
              </div>
            </div>
          </div>
          <LoginLink />
        </div>
      </Container>
    </div>
  ) : (
    <div className="md:mr-10">
      <Container>
        <OTPPage />
      </Container>
    </div>
  )
}

export default SecurityAndLogicDetails
