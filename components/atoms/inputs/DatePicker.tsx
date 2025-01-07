import React, { useState } from "react"
import "@mantine/dates/styles.css"

import { DateInput } from "@mantine/dates"
import { Label } from "../Label"
interface DatePickerInputProps {
  label: string
  placeholder: string
  required?: boolean
  leftSection?: React.ReactNode
}

function DatePickerInput({
  label,
  placeholder,
  leftSection,
  required,
}: DatePickerInputProps) {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <div>
      <Label htmlFor="name">
        {label}
        {required && <span className="mx-1">*</span>}
      </Label>

      <DateInput
        value={value}
        onChange={setValue}
        leftSection={leftSection}
        placeholder={placeholder}
        labelProps={{
          className: "text-[14px] text-[#979C9E] font-poppins font-semibold",
        }}
        className="flex-1"
      />
    </div>
  )
}

export default DatePickerInput
