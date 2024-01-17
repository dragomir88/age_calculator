export interface DateInputType {
  day: number | "";
  month: number | "";
  year: number | "";
}

export interface AgeOutputType {
  years: number;
  months: number;
  days: number;
}

export interface ValidationError {
  day?: string;
  month?: string;
  year?: string;
}

export interface AgeCalculatorFormProps {
  dateInput: DateInputType;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function getAge(dateInput: DateInputType): AgeOutputType {
  const { day, month, year } = dateInput;
  if (!day || !month || !year) {
    console.error("Invalid date input");
    return { years: 0, months: 0, days: 0 };
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    // Borrow days from the previous month
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
  }

  if (ageMonths < 0) {
    // Borrow months from the previous year
    ageMonths += 12;
    ageYears--;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}
