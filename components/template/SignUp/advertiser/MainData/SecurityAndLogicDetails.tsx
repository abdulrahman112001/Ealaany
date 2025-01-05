import { Button } from "@/components/atoms/buttons/Button"
import LoginLink from "@/components/atoms/buttons/LoginLink"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import SelectComp from "@/components/atoms/Select/SelectComp"
import { Checkbox, Container, Group } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiExternalLink } from "react-icons/fi"

function SecurityAndLogicDetails() {
  const router = useRouter()

  const [contactMethod, setContactMethod] = useState<{ value: string; label: string } | null>(null)

  return (
    <Container>
      <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
        <h2 className="text-center text-2xl font-extrabold font-poppins ">
          Security and login Details
        </h2>
      </h2>
      <div className="bg-white rounded-3xl w-[600px] p-8 shadow-2xl">
        <div className="flex space-x-4 mb-4">
          <BaseInputField
            label="Password *"
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
          <BaseInputField
            label="Confirm Password *"
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

        <div className="mb-4">
          <SelectComp
            name="contactMethod"
            label="Verify with *"
            placeholder="Select an item"
            value={contactMethod}
            onChange={(value) => setContactMethod(value as { value: string; label: string })}
            required={true}
            options={[
              { value: "sms", label: "SMS" },
              { value: "whatsapp", label: "WhatsApp" },
              { value: "email", label: "Email" },
            ]}
          />
        </div>

        <div className="mb-4">
          <Checkbox
            label="Send me helpful emails on tips on how to use the platform"
            className="font-poppins text-sm text-black mt-6 mb-2"
          />
          <Checkbox
            label={
              <>
                <p className="font-poppins text-md">
                  {" "}
                  Yes, I understand and agree to the
                </p>
                <span style={{ display: "flex", color: "#333333" }}>
                  Terms and Conditions agreement{" "}
                  <FiExternalLink className="mt-[5px] mx-[4px]" />{" "}
                  <span className="font-semibold me-[5px]">and</span> privacy
                  policy <FiExternalLink className="mt-[5px] mx-[4px]" />
                </span>
              </>
            }
          />
        </div>

        <Group justify="center" className="mt-[50px]">
          <Button action={() => router.push("/otppage")} >
            Send Code
          </Button>
        </Group>

        <LoginLink />
      </div>
    </Container>
  )
}

export default SecurityAndLogicDetails
