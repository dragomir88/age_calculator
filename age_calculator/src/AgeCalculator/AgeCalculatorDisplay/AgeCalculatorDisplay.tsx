// AgeCalculatorDisplay.tsx

interface AgeOutputType {
  years: number;
  months: number;
  days: number;
}

const AgeCalculatorDisplay = ({ years, months, days }: AgeOutputType) => (
  <div className="age-display">
    <div className="age-display-value">{years}<span className="age-display-label"> years</span></div>
    <div className="age-display-value">{months}<span className="age-display-label"> months</span></div>
    <div className="age-display-value">{days}<span className="age-display-label"> days</span></div>
  </div>
);

export default AgeCalculatorDisplay;
