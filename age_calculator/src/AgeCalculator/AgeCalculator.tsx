// AgeCalculator.tsx
import React, { useState } from "react";
import AgeCalculatorForm from "./AgeCalculatorForm/AgeCalculatorForm";
import AgeCalculatorDisplay from "./AgeCalculatorDisplay/AgeCalculatorDisplay";
import "./AgeCalculator.css";
import SubmitButton from "./SubmitButton/SubmitButton";

interface DateInputType {
  day: number | "";
  month: number | "";
  year: number | "";
}

interface AgeOutputType {
  years: number;
  months: number;
  days: number;
}

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
    const { day, month, year } = dateInput;
    if (!day || !month || !year) {
      // Handle invalid or incomplete input
      console.error("Invalid date input");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      // Borrow days from previous month
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
      ageMonths--;
    }

    if (ageMonths < 0) {
      // Borrow months from previous year
      ageMonths += 12;
      ageYears--;
    }

    setAgeOutput({ years: ageYears, months: ageMonths, days: ageDays });
    console.log(ageOutput);
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
