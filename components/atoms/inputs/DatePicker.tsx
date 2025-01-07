import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { Label } from "../Label";

interface FlagsInputFieldProps {
  textlabel?: string
  required?: boolean
}

const DateCalender = ({
  textlabel,
  required,
}: FlagsInputFieldProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (

    <div>
      <Label htmlFor="name">
        {textlabel}
        {required && <span className="mx-1">*</span>}
      </Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label=""
          value={selectedDate}
          onChange={(newValue: Dayjs | null) => setSelectedDate(newValue)}
          slots={{
            textField: TextField,
          }}
          slotProps={{
            textField: {
              variant: "outlined",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateCalender;
