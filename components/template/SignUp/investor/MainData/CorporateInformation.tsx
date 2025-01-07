import { Button } from "@/components/atoms/buttons/Button"
import BaseInputField from "@/components/atoms/inputs/BaseInputField"
import DatePickerInput from "@/components/atoms/inputs/DatePickerInput"
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField"
import SelectCountry from "@/components/molecules/Selects/SelectCountry"
import { Container, NativeSelect } from "@mantine/core"
import Image from "next/image"

function CorporateInformation() {
  return (
    <Container >
      <h2 className="text-center text-2xl mx-auto ps-[85px] font-extrabold font-poppins pb-8">
        corporate Information
      </h2>
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <p className="font-poppins text-base pb-6">About you</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <BaseInputField
              label="nick Name *"
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
            <PhoneNumberField onChange={() => { }} value="" />
          </div>
          <p className="font-poppins text-base pb-6 col-span-2">
            About corporate
          </p>

          <div className="col-span-2">
            <BaseInputField
              label="company name *"
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
          <div className="col-span-1">
            <div className="flex-1">
              <label
                htmlFor="country-select"
                className="text-[14px] text-[#979C9E] font-poppins "
              >
                corporate country *
              </label>
              <SelectCountry />
            </div>
          </div>
          <div className="col-span-1">
            <NativeSelect
              label="corporate city *"
              value={"value"}
              // onChange={(event) => setValue(event.currentTarget.value)}
              leftSection={
                <Image src="/images/id.png" alt="city" width={20} height={20} />
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
              className="flex-1"
            />
          </div>

          <div className="col-span-2">
            <BaseInputField
              label="main office address *"
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
          <div className="col-span-1">
            <BaseInputField
              label="corporate license number *"
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

            <DatePickerInput
              label="corporate license date  *"
              placeholder="date"
              leftSection={
                <Image
                  src="/images/calendar-empty.png"
                  alt="date"
                  width={20}
                  height={20}
                />
              }
            />

            {/* date input update */}
          </div>

          <div className="col-span-1">
            <div className="flex-1">
              <NativeSelect
                label="corporate status"
                //   value={value}
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
                className="flex-1"
              />
            </div>

            <div className="flex-1">
              <NativeSelect
                label="corporate type"
                //   value={value}
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
                className="flex-1"
              />
            </div>
          </div>

          <div className="col-span-1">
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
                <Image src="/images/fax.png" alt="fax" width={20} height={20} />
              }
              name="mainOfficeFax"
            />
          </div>

          <div className="flex justify-between items-center mt-4 col-span-2">
            <Button action={() => console.log("Submit clicked")} disabled>
              Submit
            </Button>
            <Button
              className="w-[200px] "
              variant="outline"
              action={() => console.log("Skip clicked")}
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CorporateInformation
