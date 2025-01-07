import { Button } from "@/components/atoms/buttons/Button";
import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import { Container } from "@mantine/core";
import Image from "next/image";

function ForgetPassword() {
    return (
        <div className="flex h-[80vh]">
            <div className="w-3/4 flex justify-center items-start  bg-gray-100 mt-16">
                <Container>
                    <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
                        Forget your password
                    </h2>

                    <div className="bg-white rounded-3xl w-[650px]  p-8 shadow-2xl">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <BaseInputField
                                    label="User Name"
                                    required
                                    placeholder="Your user name"
                                    leftSection={
                                        <Image
                                            src="/images/username.png"
                                            alt="username"
                                            width={20}
                                            height={20}
                                        />
                                    }
                                    name="userName"
                                />
                            </div>

                            <div className="col-span-2">
                                <BaseInputField
                                    label="Password"
                                    required
                                    placeholder="Your password"
                                    leftSection={
                                        <Image
                                            src="/images/key.png"
                                            alt="password"
                                            width={20}
                                            height={20}
                                        />
                                    }
                                    name="password"
                                />
                            </div>

                            <div className="col-span-2">
                                <Button action={() => console.log("Sign clicked")}>Reset</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="w-1/4 relative  mt-[-98px] z-0">
                <Image
                    src="/images/login.png"
                    alt="Sign in background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}

export default ForgetPassword;
