import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";
import { useState } from "react";
import SelectComp from "../Select/SelectComp";

function IndvidualForm() {
    const [contactMethod, setContactMethod] = useState<{ value: string; label: string } | null>(null)

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <label className='text-sm text-[#979C9E] font-[400]'>national ID type *</label>
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
            <div className="col-span-1">
                <BaseInputField
                    label="national ID number *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/profile.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>

            <div className="col-span-1">
                <div className="flex-1">
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
                    label="primary address *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
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
