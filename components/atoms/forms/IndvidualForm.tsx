import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { NativeSelect } from "@mantine/core";
import Image from "next/image";
import DateCalender from "../inputs/DatePicker";

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
                <DateCalender
                    textlabel="Occupation"
                />

            </div>

            <div >
                <DateCalender
                    textlabel="Date of Barth"

                />
            </div>

            <div className="col-span-2">
                <BaseInputField
                    label="primary address"
                    required
                    placeholder="name"
                    leftSection={
                        <Image src="/images/bag.png" alt="address" width={20} height={20} />
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
