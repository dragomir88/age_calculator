import date from "date-and-time";

interface DateInputType {
  day: number | "";
  month: number | "";
  year: number | "";
}

export const isDateValid = (
  day: number | "",
  month: number | "",
  year: number | ""
) => {
  if (day === "" || month === "" || year === "") return false;
  const dateString = `${year}-${month}-${day}`;
  return date.isValid(dateString, "YYYY-M-D");
};

export const validateInput = (
  name: string,
  value: number | "",
  dateInput: DateInputType
) => {
  let errors: any = {};
  if (name === "day" || name === "month" || name === "year") {
    const day = name === "day" ? value : dateInput.day;
    const month = name === "month" ? value : dateInput.month;
    const year = name === "year" ? value : dateInput.year;
    if (!isDateValid(day, month, year)) {
      errors = { ...errors, [name]: "Invalid date" };
    }
  }
  if (name === "month" && typeof value === "number" && (value < 1 || value > 12)) {
    errors = { ...errors, [name]: "Invalid month" };
  }
  if (
    name === "year" &&
    typeof value === "number" &&
    (value < 1900 || value > new Date().getFullYear())
  ) {
    errors = { ...errors, [name]: "Invalid year" };
  }
  return errors;
};
