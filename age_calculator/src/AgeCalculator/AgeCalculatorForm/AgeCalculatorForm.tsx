// AgeCalculatorForm.tsx
import React from 'react';
import './AgeCalculatorForm.css';
import DateInput from '../DateInput/DateInput';

interface DateInputType {
  day: number | '';
  month: number | '';
  year: number | '';
}

interface AgeCalculatorFormProps {
  dateInput: DateInputType;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AgeCalculatorForm = ({ dateInput, onDateChange }: AgeCalculatorFormProps) => {
  return (
    <form className="container mt-3">
      <div className="row g-2">
        <div className="col">
          <DateInput
            label="Day"
            name="day"
            value={dateInput.day}
            onChange={onDateChange}
          />
        </div>
        <div className="col">
          <DateInput
            label="Month"
            name="month"
            value={dateInput.month}
            onChange={onDateChange}
          />
        </div>
        <div className="col">
          <DateInput
            label="Year"
            name="year"
            value={dateInput.year}
            onChange={onDateChange}
          />
        </div>
      </div>
    </form>
  );
};

export default AgeCalculatorForm;
