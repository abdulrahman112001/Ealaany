import React, { useState } from "react"
import { DateInput } from "@mantine/dates"
interface DatePickerInputProps {
  label: string
  placeholder: string
  leftSection?: React.ReactNode
}

function DatePickerInput({
  label,
  placeholder,
  leftSection,
}: DatePickerInputProps) {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <div>
      {" "}
      <DateInput
        value={value}
        onChange={setValue}
        leftSection={leftSection}
        label={label}
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
