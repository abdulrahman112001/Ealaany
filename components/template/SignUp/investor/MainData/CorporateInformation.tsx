import { Button } from "@/components/atoms/buttons/Button"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import DatePickerInput from "@/components/atoms/inputs/DatePicker"
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField"
import { Container, NativeSelect } from "@mantine/core"
import Image from "next/image"

function CorporateInformation() {
  return (
    <div className="md:mr-10">
      <Container>
        <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
          corporate Information
        </h2>
        <div className="bg-white rounded-3xl max-w-[650px] p-4 md:p-8 shadow-2xl">
          <p className="font-poppins text-base pb-6">About you</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <BaseInputField
                label="nick Name"
                required
                placeholder="Informal or preferred name"
                name="nickName"
                leftSection={
                  <Image
                    src="/images/nick name.png"
                    alt="user"
                    width={20}
                    height={20}
                  />
                }
              />
            </div>

            <div className="col-span-2 mb-10">
              <PhoneNumberField
                label="secondary number"
                onChange={() => {}}
                value=""
              />
            </div>

            <p className="font-poppins text-base pb-2 col-span-2">
              About corporate
            </p>

            <div className="col-span-2">
              <BaseInputField
                label="company name"
                required
                placeholder="Name"
                name="companyName"
                leftSection={
                  <Image
                    src="/images/corporate.png"
                    alt="corporate"
                    width={20}
                    height={20}
                  />
                }
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <NativeSelect
                label="corporate country"
                required
                value={""}
                // onChange={(event) => setValue(event.currentTarget.value)}
                leftSection={
                  <Image
                    src="/images/flag.png"
                    alt="country"
                    width={20}
                    height={20}
                  />
                }
                data={[
                  { value: "", label: "Selection item", disabled: true },
                  { value: "Saudia", label: "Saudia" },
                  { value: "Egypt", label: "Egypt" },
                ]}
                labelProps={{
                  className:
                    "text-[14px] text-[#979C9E] font-poppins font-semibold",
                }}
                className="flex-1"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <NativeSelect
                label="corporate city"
                required
                value={""}
                // onChange={(event) => setValue(event.currentTarget.value)}
                leftSection={
                  <Image
                    src="/images/id.png"
                    alt="city"
                    width={20}
                    height={20}
                  />
                }
                data={[
                  { value: "", label: "Selection item", disabled: true },
                  { value: "Cairo", label: "Cairo" },
                  { value: "Riyadh", label: "Riyadh" },
                  { value: "Gada", label: "Gada" },
                  { value: "Alex", label: "Alex" },
                ]}
                labelProps={{
                  className:
                    "text-[14px] text-[#979C9E] font-poppins font-semibold",
                }}
              />
            </div>

            <div className="col-span-2">
              <BaseInputField
                label="main office address"
                required
                placeholder="name"
                leftSection={
                  <Image
                    src="/images/bag.png"
                    alt="office"
                    width={20}
                    height={20}
                  />
                }
                name="mainOfficeAddress"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <BaseInputField
                label="corporate license number"
                required
                placeholder="123456"
                leftSection={
                  <Image
                    src="/images/license-line.png"
                    alt="license"
                    width={20}
                    height={20}
                  />
                }
                name="licenseNumber"
                maxLength={6}
                inputMode="numeric"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <DatePickerInput
                label="corporate license date"
                placeholder="date"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <NativeSelect
                label="corporate status"
                value={""}
                //   onChange={(event) => setValue(event.currentTarget.value)}
                leftSection={
                  <Image
                    src="/images/id.png"
                    alt="status"
                    width={20}
                    height={20}
                  />
                }
                data={[
                  { value: "", label: "Selection item", disabled: true },
                  { value: "active", label: "active" },
                  { value: "inactive", label: "inactive" },
                ]}
                labelProps={{
                  className:
                    "text-[14px] text-[#979C9E] font-poppins font-semibold",
                }}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <NativeSelect
                label="corporate type"
                value={""}
                //   onChange={(event) => setValue(event.currentTarget.value)}
                leftSection={
                  <Image
                    src="/images/id.png"
                    alt="type"
                    width={20}
                    height={20}
                  />
                }
                data={[
                  { value: "", label: "Selection item", disabled: true },
                  { value: "commercial", label: "commercial" },
                  { value: "non-profit", label: "non-profit" },
                ]}
                labelProps={{
                  className:
                    "text-[14px] text-[#979C9E] font-poppins font-semibold",
                }}
              />
            </div>

            <div className="col-span-2">
              <BaseInputField
                label="company classification"
                placeholder="name"
                leftSection={
                  <Image
                    src="/images/classification.png"
                    alt="classification"
                    width={20}
                    height={20}
                  />
                }
                name="companyClassification"
              />
            </div>

            <div className="col-span-2">
              <BaseInputField
                label="main office fax"
                placeholder="Select your verification method"
                leftSection={
                  <Image
                    src="/images/fax.png"
                    alt="fax"
                    width={20}
                    height={20}
                  />
                }
                name="mainOfficeFax"
              />
            </div>

            <div className="flex justify-between items-center mt-4 col-span-2">
              <Button action={() => console.log("Submit clicked")} disabled>
                Submit
              </Button>
              <Button
                className="w-[200px] mr-0"
                variant="outline"
                action={() => console.log("Skip clicked")}
              >
                Skip
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CorporateInformation
