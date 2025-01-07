import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { FlagsForm } from "@/components/molecules/Selects/FlagsForm";
import { NativeSelect } from "@mantine/core";
import Image from "next/image";
import DateCalender from "../inputs/DatePicker";

function CorporateBeneficiaryForm() {

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <BaseInputField
                    label="Corporate Name"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/corporate.png" alt="fax" width={20} height={20} />
                    }
                    name="corporateName"
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


            <div >
                <BaseInputField
                    label="Corporate License Number"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/license-line.png" alt="fax" width={20} height={20} />
                    }
                    name="licenseNumber"
                />
            </div>

            <div>
                <NativeSelect
                    label="Corporate Type"
                    required
                    value={""}
                    // onChange={(event) => setValue(event.currentTarget.value)}
                    leftSection={
                        <Image src="/images/id.png" alt="city" width={20} height={20} />
                    }
                    data={[

                        { value: "", label: "Selection item", disabled: true },
                        { value: "Type 1", label: "Type1" },
                        { value: "Type 2", label: "Type 2" },
                        { value: "Type 3", label: "Type 3" },

                    ]}
                    labelProps={{
                        className:
                            "text-[14px] text-[#979C9E] font-poppins font-semibold",
                    }}
                />
            </div>



            <div >
                <DateCalender
                    textlabel="Corporate License Expiry Date"
                    required

                />
            </div>

            <div>
                <BaseInputField
                    label="Main Office Address"
                    placeholder="name"

                    leftSection={
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                    }
                    name="mainAddress"
                />
            </div>

            <div className="col-span-2">
                <NativeSelect
                    label="industruy"
                    required
                    value={""}
                    // onChange={(event) => setValue(event.currentTarget.value)}
                    leftSection={
                        <Image src="/images/profile.png" alt="industry" width={20} height={20} />
                    }
                    data={[
                        { value: "", label: "Selection item", disabled: true },
                        { value: "industry1", label: "industry1" },
                        { value: "industry2", label: "industry2" },

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
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
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
                        { value: "National ID", label: "National ID" },
                        { value: "Iqama", label: "Iqama" },

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
                    label="primary address"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                    }
                    name="primaryAddress"
                />
            </div>

            <div className="col-span-2">
                <BaseInputField
                    label="fax number"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/fax.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>
        </div>
    )
}

export default CorporateBeneficiaryForm;
