import React from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Label } from "../Label"

interface PhoneNumberFieldProps {
  value: string
  onChange: (value: string) => void
  label?: string;
  required?: boolean

}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  value,
  required,
  onChange,
  label,
}) => {
  return (
    <div className="flex-1">
      <Label htmlFor="name">
        {label}
        {required && <span className="mx-1">*</span>}
      </Label>
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
