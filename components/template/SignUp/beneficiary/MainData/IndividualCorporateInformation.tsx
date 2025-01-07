import { Button } from "@/components/atoms/buttons/Button";
import CorporateBeneficiaryForm from "@/components/atoms/forms/CorporateBeneficiaryForm";
import IndvidualForm from "@/components/atoms/forms/IndvidualForm";
import BaseInputField from "@/components/atoms/inputs/BaseInputField";
import PhoneNumberField from "@/components/atoms/inputs/PhoneNumberField";
import { Container } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";

const IndividualCorporateInformation = () => {
  const [selected, setSelected] = useState("individual");
  const [contactMethod, setContactMethod] = useState<{ value: string; label: string } | null>(null)
  return (
    <Container>
      <h2 className="text-center text-2xl mx-auto ps-[85px] font-extrabold font-poppins pb-8">
        Individual/Corporate Information
      </h2>
      <div className="bg-white w-[600px] rounded-3xl p-8 shadow-2xl">
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


          <div className="col-span-1">
            <div
              onClick={() => setSelected("individual")}
              className={`flex-1 text-center text-sm font-semibold py-[13px] border ${selected === "individual"
                ? "border-[#333333] text-[#333333]"
                : "border-[#EEEEEE] text-[#EEEEEE]"
                } rounded-[12px] cursor-pointer`}
            >
              individual
            </div>
          </div>
          <div className="col-span-1">
            <div
              onClick={() => setSelected("corporate")}
              className={`flex-1 text-center text-sm font-semibold py-[13px] border ${selected === "corporate"
                ? "border-[#333333] text-[#333333]"
                : "border-[#EEEEEE] text-[#EEEEEE]"
                } rounded-[12px] cursor-pointer`}
            >
              corporate
            </div>
          </div>




        </div>

        {selected === "individual" && <IndvidualForm />}
        {selected === "corporate" && <CorporateBeneficiaryForm />}



        <div className="flex justify-between items-center mt-4 col-span-2">
          <Button action={() => console.log("Submit clicked")} disabled>
            Submit
          </Button>
          <Button
            className="w-[200px]"
            variant="outline"
            action={() => console.log("Skip clicked")}
          >
            Skip
          </Button>

        </div>
      </div>
    </Container>
  );
};

export default IndividualCorporateInformation;
