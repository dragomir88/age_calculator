import './AgeCalculatorDisplay.css';
interface AgeOutputType {
  years: number;
  months: number;
  days: number;
}

const AgeCalculatorDisplay = ({ years, months, days }: AgeOutputType) => (
  <div className="age-display">
    <div className="age-display-value">{years === 0 ? "--" : years}<span className="age-display-label"> years</span></div>
    <div className="age-display-value">{months === 0 ? "--": months}<span className="age-display-label"> months</span></div>
    <div className="age-display-value">{days === 0 ? "--": days }<span className="age-display-label"> days</span></div>
  </div>
);

export default AgeCalculatorDisplay;
