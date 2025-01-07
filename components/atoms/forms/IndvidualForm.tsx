import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";

function IndvidualForm() {

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <NativeSelect
                    label="national ID Type"
                    required
                    value={""}
                    // onChange={(event) => setValue(event.currentTarget.value)}
                    leftSection={
                        <Image src="/images/id.png" alt="national ID Type" width={20} height={20} />
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
                <BaseInputField
                    label="national ID number"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/profile.png" alt="fax" width={20} height={20} />
                    }
                    name="nationalIDNumber"
                />
            </div>

            <div >
                <DatePickerInput
                    label="Occupation"
                    placeholder="name"
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
                <div className="flex-1">
                    <DatePickerInput
                        label="Date of Barth"
                        placeholder="name"
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



    );
}

export default IndvidualForm;
