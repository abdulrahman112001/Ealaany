import { Button } from "@/components/atoms/buttons/Button";
import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField";
import { Container, NativeSelect } from "@mantine/core";
import Image from "next/image";




function ContactInformation() {
    return (
        <Container >
            <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
                Contact Information
            </h2>
            <div className="bg-white rounded-3xl p-8 w-[650px] shadow-2xl">
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
                            label="secondary phone"
                            onChange={() => { }} value="" />
                    </div>

                    <p className="font-poppins text-base pb-6 col-span-2">
                        About municipality
                    </p>
                    <div className="col-span-2">
                        <BaseInputField
                            label="municipality name "
                            required
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

                    <div>
                        <NativeSelect
                            label="municipality country"
                            value={"value"}
                            required
                            // onChange={(event) => setValue(event.currentTarget.value)}
                            leftSection={
                                <Image src="/images/id.png" alt="city" width={20} height={20} />
                            }
                            data={[
                                { value: "", label: "Selection item", disabled: true },
                                { value: "Egypt", label: "Egypt" },
                                { value: "Saudia", label: "Saudia" },
                                { value: "USA", label: "USA" },
                            ]}
                            labelProps={{
                                className:
                                    "text-[14px] text-[#979C9E] font-poppins font-semibold",
                            }}
                        />
                    </div>

                    <div >
                        <NativeSelect
                            label="municipality city"
                            required
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
                        />
                    </div>

                    <div>
                        <BaseInputField
                            label="department"
                            required
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

                    <div >
                        <BaseInputField
                            label="offcial position"
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
                            label="Main Office Address "
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
    );
};

export default ContactInformation;

