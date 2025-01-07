import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";

const DatePicker2 = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label className='text-sm text-[#979C9E] font-[400] '></label>
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
    );
};

export default DatePicker2;
