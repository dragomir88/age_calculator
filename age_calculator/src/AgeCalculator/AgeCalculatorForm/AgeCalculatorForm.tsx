import React, { useState } from "react";
import "./AgeCalculatorForm.css";
import DateInput from "../DateInput/DateInput";
import date from "date-and-time";

interface DateInputType {
  day: number | "";
  month: number | "";
  year: number | "";
}

interface ValidationError {
  day?: string;
  month?: string;
  year?: string;
}

interface AgeCalculatorFormProps {
  dateInput: DateInputType;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AgeCalculatorForm = ({
  dateInput,
  onDateChange,
}: AgeCalculatorFormProps) => {
  const [errors, setErrors] = useState<any>({});

  const isDateValid = (
    day: number | "",
    month: number | "",
    year: number | ""
  ) => {
    if (day === "" || month === "" || year === "") return false;
    const dateString = `${year}-${month}-${day}`;
    console.log("date invalid", date.isValid(dateString, "YYYY-M-D"));

    return date.isValid(dateString, "YYYY-M-D");
  };

  const validateInput = (name: string, value: number | "") => {
    let errors: any;
    console.log("date", name === "day" || name === "month" || name === "year");
    if (name === "day" || name === "month" || name === "year") {
      const day = name === "day" ? value : dateInput.day;
      const month = name === "month" ? value : dateInput.month;
      const year = name === "year" ? value : dateInput.year;
      if (!isDateValid(day, month, year)) {
        errors = { ...errors, ["day"]: "Invalid date" };
      } else {
        errors = {};
      }
    }
    if (
      name === "month" &&
      typeof value === "number" &&
      (value < 1 || value > 12)
    ) {
      errors = { ...errors, ["month"]: "Invalid month" };
    }
    if (
      name === "year" &&
      typeof value === "number" &&
      (value < 1900 || value > new Date().getFullYear())
    ) {
      errors = { ...errors, ["year"]: "Invalid year" };
    }
    return errors;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errors = validateInput(name, value === "" ? "" : parseInt(value));
    console.log("err", { ...errors });
    setErrors({ ...errors });
    onDateChange(e);
  };

  return (
    <form className="container mt-3">
      <div className="row g-2">
        <div className="col">
          <DateInput
            label="Day"
            name="day"
            value={dateInput.day}
            onChange={handleDateChange}
            errorMessage={errors.day}
          />
        </div>
        <div className="col">
          <DateInput
            label="Month"
            name="month"
            value={dateInput.month}
            onChange={handleDateChange}
            errorMessage={errors.month}
          />
        </div>
        <div className="col">
          <DateInput
            label="Year"
            name="year"
            value={dateInput.year}
            onChange={handleDateChange}
            errorMessage={errors.year}
          />
        </div>
      </div>
    </form>
  );
};

export default AgeCalculatorForm;
