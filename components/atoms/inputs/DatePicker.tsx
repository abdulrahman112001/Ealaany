import "@mantine/dates/styles.css"
import React, { useState } from "react"

import { DateInput } from "@mantine/dates"
import { Label } from "../Label"
import InfoMessage from "./InfoMessage"
interface DatePickerInputProps {
  label: string
  placeholder: string
  required?: boolean
  leftSection?: React.ReactNode
  infoMessage?: string

}

function DatePickerInput({
  label,
  placeholder,
  leftSection,
  required,
  infoMessage

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
        rightSection={<InfoMessage infoMessage={infoMessage} />}

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
