import React from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

interface PhoneNumberFieldProps {
  value: string
  onChange: (value: string) => void
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex-1">
      <label className="text-[14px] text-[#979C9E] font-poppins">
        phone number *
      </label>
      <PhoneInput
        country="sa"
        value={value}
        onChange={(phone) => onChange(phone)}
        inputClass="text-[14px] text-[#979C9E] font-poppins font-semibold"
        buttonClass="border-none"
        placeholder="Your phone number"
      />
    </div>
  )
}

export default PhoneNumberField
