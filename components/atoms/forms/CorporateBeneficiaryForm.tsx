import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import Image from "next/image";
import { useState } from "react";
import SelectComp from "../Select/SelectComp";

function CorporateBeneficiaryForm() {
    const [contactMethod, setContactMethod] = useState<{ value: string; label: string } | null>(null)

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <BaseInputField
                    label="Corporate Name *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/corporate.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>

            <div className="col-span-1">
                <label className='text-sm text-[#979C9E] font-[400] '>Corporate Country *</label>
                <SelectComp
                    name="contactMethod"
                    label="corporate country *"
                    placeholder="Select a country"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "Country 1", label: "Country 1" },
                        { value: "Country 2", label: "Country 2" },
                    ]}
                />
            </div>

            <div className="col-span-1">
                <label className='text-sm text-[#979C9E] font-[400]'>Corporate City *</label>
                <SelectComp
                    name="corporate country"
                    label="corporate country*"
                    placeholder="Select a city"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "City 1", label: "City 1" },
                        { value: "City 2", label: "City 2" },
                    ]}
                />
            </div>

            <div className="col-span-1">
                <BaseInputField
                    label="Corporate License Number *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/license.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>

            <div className="col-span-1">
                <label className='text-sm text-[#979C9E] font-[400]'>Corporate Type </label>
                <SelectComp
                    name="corporate country"
                    label="corporate Type*"
                    placeholder="selection item"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "Type 1", label: "Type1" },
                        { value: "Type 2", label: "Type 2" },
                        { value: "Type 3", label: "Type 3" },
                    ]}
                />
            </div>

            <div className="col-span-1">
                <BaseInputField
                    label="Corporate License Number *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/license-line.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>
            <div className="col-span-1">
                <BaseInputField
                    label="Main Office Address"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>

            <div className="col-span-2">
                <label className='text-sm text-[#979C9E] font-[400]'>industruy *  </label>
                <SelectComp
                    name="industruy"
                    label="industruy*"
                    placeholder="selection item"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "industry", label: "industry" },
                    ]}
                />
            </div>

            <div className="col-span-2">
                <BaseInputField
                    label="Manager Name *"
                    placeholder="name"
                    leftSection={
                        <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                    }
                    name="mainOfficeFax"
                />
            </div>

            <div className="col-span-1">
                <label className='text-sm text-[#979C9E] font-[400]'>Manager ID Type *  </label>
                <SelectComp
                    name="managerID"
                    label="Manager ID Type * "
                    placeholder="selection item"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "1", label: "National ID" },
                        { value: "2", label: "Iqama" },
                    ]}
                />
            </div>


            <div className="col-span-1">
                <label className='text-sm text-[#979C9E] font-[400]'>Manager ID Number *  </label>
                <SelectComp
                    name="managerNumber"
                    label="Manager ID Number *"
                    placeholder="selection item"
                    value={contactMethod}
                    onChange={(value) => setContactMethod(value as { value: string; label: string })}
                    required={true}
                    options={[
                        { value: "type1", label: "Number 1" },
                    ]}
                />
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
    )
}

export default CorporateBeneficiaryForm;
