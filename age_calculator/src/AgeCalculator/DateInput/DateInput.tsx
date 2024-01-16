// DateInput.tsx
import React, { ChangeEvent } from "react";

interface DateInputProps {
  label: string;
  name: string;
  value: number | "";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({ label, name, value, onChange }: DateInputProps) => (
  <div className="mb-3">
  <label htmlFor={name} className="form-label">{label}</label>
  <input
    type="number"
    className="form-control"
    id={name}
    name={name}
    value={value}
    onChange={onChange}
  />
</div>
);
export default DateInput;
