import { TextInput } from "@mantine/core"
import React from "react"
import { Label } from "../Label"

interface BaseInputFieldProps {
  leftSection?: React.ReactNode
  label?: string
  placeholder?: string
  name: string
  maxLength?: number
  inputMode?: "text" | "numeric"
  required?: boolean
}

function BaseInputField({
  leftSection,
  label,
  placeholder,
  name,
  maxLength,
  inputMode,
  required,
}: BaseInputFieldProps) {
  // const { values, setFieldValue } = useFormikContext()
  return (
    <div>
      <Label htmlFor="name">
        {label}
        {required && <span className="mx-1">*</span>}
      </Label>

      <TextInput
        // label={label}
        placeholder={placeholder}
        leftSection={leftSection}
        // rightSection="dd "
        name={name}
        labelProps={{
          className: "text-[14px] text-[#979C9E] font-poppins font-semibold",
        }}
        maxLength={maxLength}
        className="flex-1"
        inputMode={inputMode}
      // onChange={(event) => setFieldValue(name, event.currentTarget.value)}
      />
    </div>
  )
}

export default BaseInputField
