import Image from "next/image"
import Link from "next/link"
import React from "react"

function Roles() {
  return (
    <div className="w-full  mt-12 p-12">
      <div className="w-[80%]  m-auto  bg-white rounded-[40px] p-10  my-12 shadow-2xl ">
        <div className="w-full text-center my-2 font-PoppinsBold text-secondary text-[32px]">
          <span className="font-bold text-main">Choose your role</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Link
            href={"sign-up/advertiser"}
            className="  rounded-[40px]  border border-borderColor"
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <Image
                width={120}
                height={120}
                src="/images/characters.png "
                className="my-4  "
                alt="man"
              />
              <p className="font-PoppinsLight text-[14px]">
                I’m an <span className="font-Poppins">Advertiser</span>, i’m
                seeking to promote my brand effectively
              </p>
            </div>
          </Link>
          <Link
            href={"sign-up/investor"}
            className="  rounded-[40px]  border border-borderColor"
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <Image
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
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link
            href={"sign-up/municipality"}
            className="  rounded-[40px]  border border-borderColor"
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <Image
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
          </Link>
          <Link
            href={"sign-up/beneficiary"}
            className="  rounded-[40px]  border border-borderColor"
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <Image
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
          </Link>
          <Link
            href={"sign-up/engineering"}
            className="  rounded-[40px]  border border-borderColor"
          >
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <Image
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
          </Link>
        </div>

        <div className="w-full text-center my-5 font-extralight  text-sm">
          <span>
            Already have an account?{" "}
            <a href="#" className="text-danger ">
              Login{" "}
            </a>{" "}
          </span>
        </div>
        <button className="w-full bg-[#00CCDC] mt-5 h-[56px] text-white  rounded-[8px]">
          submit
        </button>
      </div>
    </div>
  )
}

export default Roles
