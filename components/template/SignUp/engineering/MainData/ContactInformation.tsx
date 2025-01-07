import { Button } from "@/components/atoms/buttons/Button";
import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import DateCalender from "@/components/atoms/inputs/DatePicker";
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField";
import { FlagsForm } from "@/components/molecules/Selects/FlagsForm";
import { Container, NativeSelect } from "@mantine/core";
import Image from "next/image";


function ContactInformation() {
    return (
        <div className="mr-10">
            <Container>
                <h2 className="text-center text-2xl mx-auto font-extrabold font-poppins pb-8">
                    Contact Information
                </h2>

                <div className="bg-white rounded-3xl w-[650px] p-8 shadow-2xl">
                    <p className="font-poppins text-base pb-6">About you</p>
                    <div className="grid grid-cols-2 gap-4">
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
                                onChange={() => { }} value="" />
                        </div>

                        <p className="font-poppins text-base pb-6 col-span-2">
                            About office
                        </p>

                        <div className="col-span-2">
                            <BaseInputField
                                label="office name"
                                required
                                placeholder="Name"
                                name="office name"
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

                        <div>
                            <FlagsForm
                                label="office country"
                                required
                            />
                        </div>
                        <div>
                            <NativeSelect
                                label="office city"
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
                                className="flex-1"
                            />
                        </div>

                        <div >
                            <BaseInputField
                                label="license number "
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

                        <div >
                            <DateCalender
                                textlabel="license Expiry Date"
                                required
                            />

                        </div>

                        <div >
                            <NativeSelect
                                label="Design Classification"
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
                                className="flex-1"
                            />

                        </div>

                        <div>
                            <NativeSelect
                                label="Supervision Classification"
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
                                className="flex-1"
                            />
                        </div>

                        <div className="col-span-2">
                            <BaseInputField
                                label="Main Office Address"
                                required
                                placeholder="Physical address of the main office"
                                leftSection={
                                    <Image src="/images/bag.png" alt="fax" width={20} height={20} />
                                }
                                name="mainOfficeAdress"
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

                        <div className="flex justify-center items-center mt-4 col-span-2">
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
    );
};

export default ContactInformation;

