import Image from "next/image"
import React from "react"

function TobNavbar() {
  return (
    <div className="bg-[#F4F0E7] p-4">
      <div className="flex items-center justify-between md:ml-20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/email.png"
              alt="Email Icon"
              width={20}
              height={14}
            />
            <p className="text-[#636363] text-sm">info@example.com</p>
          </div>

          <div className="w-[1px] h-[20px] bg-[#222222] opacity-20"></div>

          <div className="flex items-center space-x-2">
            <Image
              src="/images/help.png"
              alt="Help Icon"
              width={20}
              height={20}
            />
            <p className="text-[#636363] text-sm">Need a help?</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:mr-20">
          <Image
            src="/images/uk-flag.png"
            alt="Language"
            width={29}
            height={21}
          />
          <Image src="/images/vector.png" alt="arrow" width={13} height={6} />
        </div>
      </div>
    </div>
  )
}

export default TobNavbar
