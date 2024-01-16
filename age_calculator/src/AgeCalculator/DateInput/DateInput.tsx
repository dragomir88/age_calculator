import React, { ChangeEvent } from "react";

interface DateInputProps {
  label: string;
  name: string;
  value: number | "";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string; // Add this line for the error message
}

const DateInput = ({ label, name, value, onChange, errorMessage }: DateInputProps) => (
  <div className="mb-2">
    <label htmlFor={name} className="form-label">{label}</label>
    <input
      type="number"
      className={`form-control ${errorMessage ? 'is-invalid' : ''}`} // Add conditional class for error styling
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>} {/* Add this line for displaying error */}
  </div>
);

export default DateInput;
