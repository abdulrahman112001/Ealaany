import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import SelectCountry from "@/components/molecules/Selects/SelectCountry";
import { NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";

function FreelanceForm() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <NativeSelect
                    label="industry *"
                    value={"value"}
                    // onChange={(event) => setValue(event.currentTarget.value)}
                    leftSection={
                        <Image src="/images/profile.png" alt="industry" width={20} height={20} />
                    }
                    data={[
                        { value: "", label: "Selection item", disabled: true },
                        { value: "test1", label: "test1" },
                        { value: "test2", label: "test2" },

                    ]}
                    labelProps={{
                        className:
                            "text-[14px] text-[#979C9E] font-poppins font-semibold",
                    }}
                    className="flex-1"
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


            </div>

            <div className="col-span-1">
                <BaseInputField
                    label="occupation"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/license-line.png" alt="occupation" width={20} height={20} />
                    }
                    name="occupation"
                />
            </div>

            <div className="col-span-1">
                <DatePickerInput
                    label="freelancer license Expiry date  *"
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
            </div>
            <div className="col-span-1">
                <DatePickerInput
                    label="date of birth"
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
            </div>

            <div className="col-span-2">
                <BaseInputField
                    label="fax number"
                    placeholder="Select your verification method"
                    leftSection={
                        <Image src="/images/fax.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>
            <div className="col-span-2">
                <BaseInputField
                    label="primary address"
                    placeholder="Select your verification method"
                    leftSection={
                        <Image src="/images/id.png" alt="address" width={20} height={20} />
                    }
                    name="primaryAddress"
                />
            </div>
        </div>



    );
}

export default FreelanceForm;
