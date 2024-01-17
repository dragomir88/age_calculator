import React, { useState } from "react";
import "./AgeCalculatorForm.css";
import DateInput from "../DateInput/DateInput";
import { validateInput } from "./utils";

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
  const [errors, setErrors] = useState<ValidationError>({});

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errors = validateInput(name, value === "" ? "" : parseInt(value),dateInput);
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
