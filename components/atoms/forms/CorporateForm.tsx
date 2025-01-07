import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { FlagsForm } from "@/components/molecules/Selects/FlagsForm";
import { NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";

function CorporateForm() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div >
                <BaseInputField
                    label="Corporate Name"
                    required
                    placeholder="name"
                    leftSection={
                        <Image
                            src="/images/corporate.png"
                            alt="corporate"
                            width={20}
                            height={20}
                        />
                    }
                    name="CorporateName"
                />
            </div>

            <div>
                <FlagsForm
                    label="corporate country/city"
                    required
                />
            </div>

            <div>
                <FlagsForm
                    label="corporate country"
                    required
                />
            </div>

            <div>
                <NativeSelect
                    label="corporate city"
                    required
                    value={""}
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
                />
            </div>

            <div>
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

            <div>
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

            <div >
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

            <div>
                <BaseInputField
                    label="main office address"
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

            <div className="col-span-2">
                <NativeSelect
                    label="industry"
                    required
                    value={""}
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
                />
            </div>

            <div className="col-span-2">
                <BaseInputField
                    label="Manager Name"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/profile.png" alt="profile" width={20} height={20} />
                    }
                    name="managerName"
                />
            </div>

            <div>
                <NativeSelect
                    label="Manager ID Type"
                    required
                    value={""}
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
                />
            </div>

            <div>
                <NativeSelect
                    label="Manager ID Number"
                    required
                    value={""}
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

export default CorporateForm;
