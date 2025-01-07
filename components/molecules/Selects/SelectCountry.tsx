import SelectComp from "@/components/atoms/Select/SelectComp"
import React from "react"

function SelectCountry() {
  return (
    <div>
      <SelectComp
        name="country"
        onChange={() => { }}
        options={[
          { label: "Saudi Arabia", value: "sa" },
          { label: "United Arab Emirates", value: "ae" },
          { label: "United States", value: "us" },
        ]}
        placeholder="Select country"
        value={null}

      />
    </div>
  )
}

export default SelectCountry
