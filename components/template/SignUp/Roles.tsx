import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function Roles() {
  const [activeLink, SetactiveLink] = useState("");
  const router = useRouter();

  return (
    <div className="w-full  mt-12 ">
      <div className="w-[95%] md:w-[80%]  m-auto  bg-white rounded-[40px] p-4 md:p-10  my-12 shadow-2xl ">
        <div className="w-full text-center my-2 font-PoppinsBold text-secondary text-[32px]">
          <span className="font-bold  text-[16px] md:text-[30px]   text-main">
            Choose your role
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div
            className={`cursor-pointer relative  rounded-[40px] hover:bg-[#e0f8fa] duration-1000  ${
              activeLink === "sign-up/advertiser"
                ? "bg-[#e0f8fa] activeCircle  "
                : ""
            } border border-borderColor`}
          >
            <div
              className="flex flex-col p-4 justify-center items-center gap-2 text-center"
              onClick={() => SetactiveLink("sign-up/advertiser")}
            >
              <img
                width={120}
                height={120}
                src="/images/characters.png"
                className="my-4  "
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m an <span className="font-Poppins">Advertiser</span>, i’m
                seeking to promote my brand effectively
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer relative  rounded-[40px] hover:bg-[#e0f8fa] duration-1000 ${
              activeLink === "sign-up/investor"
                ? "bg-[#e0f8fa] activeCircle  "
                : ""
            } border border-borderColor`}
            onClick={() => SetactiveLink("sign-up/investor")}
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img
                width={70}
                height={70}
                src="/images/MAN.png "
                className="my-4"
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m an <span className="font-Poppins">investor</span>, looking
                for profitable advertising opportunities
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div
            className={`cursor-pointer  relative rounded-[40px] hover:bg-[#e0f8fa] duration-1000 ${
              activeLink === "sign-up/municipality"
                ? "bg-[#e0f8fa] activeCircle"
                : ""
            } border border-borderColor`}
            onClick={() => SetactiveLink("sign-up/municipality")}
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img
                width={80}
                height={80}
                src="/images/MAN2.png "
                className="my-4"
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m a <span className="font-Poppins">Municipality</span>,
                ensuring compliance with regulations
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer relative rounded-[40px] hover:bg-[#e0f8fa] duration-1000 ${
              activeLink === "sign-up/beneficiary"
                ? "bg-[#e0f8fa] activeCircle"
                : ""
            } border border-borderColor`}
            onClick={() => SetactiveLink("sign-up/beneficiary")}
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img
                width={220}
                height={220}
                src="/images/characters (3).png "
                className="my-4"
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m a <span className="font-Poppins">beneficiary</span>, I own a
                property for billboard usage.
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer relative rounded-[40px] hover:bg-[#e0f8fa] duration-1000 ${
              activeLink === "sign-up/engineering"
                ? "bg-[#e0f8fa] activeCircle"
                : ""
            } border border-borderColor`}
            onClick={() => SetactiveLink("sign-up/engineering")}
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img
                width={170}
                height={170}
                src="/images/characters (4).png "
                className="my-4"
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m an <span className="font-Poppins">engineering office,</span>
                , developing compliant ads plans
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center my-5 font-extralight  text-sm">
          <span>
            Already have an account?{" "}
            <a href="#" className="text-danger ">
              Login{" "}
            </a>{" "}
          </span>
        </div>
        <button
          className={` w-full ${
            activeLink == "" ? "bg-[#e0f8fa] " : "bg-[#00ccdc]"
          } my-5 h-[56px] text-white  rounded-[8px] `}
          onClick={() => {
            if (activeLink !== "") {
              router.push(`${activeLink}`);
            }
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Roles;
