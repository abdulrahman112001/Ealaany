import { Button } from "@/components/atoms/buttons/Button";
import CorporateForm from "@/components/atoms/forms/CorporateForm";
import FreelanceForm from "@/components/atoms/forms/FreelanceForm";
import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField";
import { Container } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";

function IndividualInformation() {
    const [userType, setUserType] = useState("freelancer");

    return (
        <div className="mr-10">
            <Container>
                <h2 className="text-center text-2xl mx-auto font-extrabold font-poppins pb-8">
                    Individual/Corporate Information
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

                        <p className="font-poppins text-base mb-[-12px] ms-[5px] col-span-2">if you</p>

                        <div className="col-span-1 mb-6">
                            <div
                                onClick={() => setUserType("freelancer")}
                                className={`flex-1 text-center text-sm font-semibold py-[13px] border ${userType === "freelancer"
                                    ? "border-[#333333] text-[#333333]"
                                    : "border-[#EEEEEE] text-[#EEEEEE]"
                                    } rounded-[12px] cursor-pointer`}
                            >
                                freelancer
                            </div>
                        </div>
                        <div className="col-span-1 mb-6">
                            <div
                                onClick={() => setUserType("corporate")}
                                className={`flex-1 text-center text-sm font-semibold py-[13px] border ${userType === "corporate"
                                    ? "border-[#333333] text-[#333333]"
                                    : "border-[#EEEEEE] text-[#EEEEEE]"
                                    } rounded-[12px] cursor-pointer`}
                            >
                                corporate
                            </div>
                        </div>

                    </div>

                    {userType === "freelancer" && <FreelanceForm />}
                    {userType === "corporate" && <CorporateForm />}

                    <div className="flex justify-between items-center mt-4 col-span-2">
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
            </Container>
        </div>
    );
}

export default IndividualInformation;
