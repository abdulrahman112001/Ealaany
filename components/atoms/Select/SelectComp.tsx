import React from "react"
import Select, { MultiValue, SingleValue, StylesConfig } from "react-select"

interface Option {
  label: string
  value: string
}

interface SelectCompProps {
  value: Option | null
  onChange: (value: MultiValue<Option> | SingleValue<Option>) => void
  placeholder: string
  options: Option[]
  customStyles?: StylesConfig<Option>
  isMulti?: boolean
  isDisabled?: boolean
  name:string
  [key: string]: any
}

const SelectComp: React.FC<SelectCompProps> = ({
  value,
  onChange,
  placeholder,
  options,
  customStyles,
  isMulti = false,
  isDisabled = false,
  name,
  ...restProps
}) => {
  const defaultStyles: StylesConfig<Option> = {
    control: (provided) => ({
      ...provided,
      height: "40px",
      borderRadius: "5px",
      fontSize: "14px",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),
  }

  const combinedStyles = {
    ...defaultStyles,
    ...customStyles,
  }

  return (
    <div>
      <Select
        id="dynamic-select"
        value={value}
        onChange={(newValue, actionMeta) => onChange(newValue)}
        options={options}
        name={name}
        placeholder={placeholder}
        styles={combinedStyles}
        isMulti={isMulti}
        isDisabled={isDisabled}
        {...restProps}
      />
    </div>
  )
}

export default SelectComp
