// AgeCalculator.tsx
import React, { useState } from "react";
import AgeCalculatorForm from "./AgeCalculatorForm/AgeCalculatorForm";
import AgeCalculatorDisplay from "./AgeCalculatorDisplay/AgeCalculatorDisplay";
import "./AgeCalculator.css";
import SubmitButton from "./SubmitButton/SubmitButton";
import { AgeOutputType, DateInputType, getAge } from "./utils";



const AgeCalculator = () => {
  const [dateInput, setDateInput] = useState<DateInputType>({
    day: "",
    month: "",
    year: "",
  });
  const [ageOutput, setAgeOutput] = useState<AgeOutputType>({
    years: 0,
    months: 0,
    days: 0,
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof DateInputType;
    const value = e.target.value;
    setDateInput((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAge = () => {
    const ageResult = getAge(dateInput);
    setAgeOutput(ageResult);
  };

  return (
    <div className="age-calculator">
      <AgeCalculatorForm
        dateInput={dateInput}
        onDateChange={handleDateChange}
      />
      <SubmitButton onClick={calculateAge} />
      <AgeCalculatorDisplay {...ageOutput} />
    </div>
  );
};

export default AgeCalculator;
