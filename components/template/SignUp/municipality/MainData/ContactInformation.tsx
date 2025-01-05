import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField";
import SelectCountry from "@/components/molecules/Selects/SelectCountry";
import { Container, NativeSelect } from "@mantine/core";
import Image from "next/image";




function ContactInformation() {
    return (
        <Container >
            <h2 className="text-center text-2xl mx-auto ps-[85px] font-extrabold font-poppins pb-8">
                Contact Information
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
                        About municipality
                    </p>
                    <div className="col-span-2">
                        <BaseInputField
                            label="municipality name *"
                            placeholder="Name"
                            name="municipality name"
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
                                municipality country *
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
                            label="department *"
                            placeholder="name"
                            leftSection={
                                <Image
                                    src="/images/department.png"
                                    alt="office"
                                    width={20}
                                    height={20}
                                />
                            }
                            name="department"
                        />
                    </div>

                    <div className="col-span-2">
                        <BaseInputField
                            label="offcial position *"
                            placeholder="name"
                            leftSection={
                                <Image
                                    src="/images/position.png"
                                    alt="position"
                                    width={20}
                                    height={20}
                                />
                            }
                            name="position"
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

                    <div className="col-span-2">
                        <BaseInputField
                            label="Main Office Address *"
                            placeholder="Physical address of the main office"
                            leftSection={
                                <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                            }
                            name="mainOfficeAdress"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactInformation;

