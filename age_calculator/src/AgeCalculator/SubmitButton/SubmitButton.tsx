import "./SubmitButton.css"; // Create a separate CSS file for the button styles

interface SubmitButtonProps {
  onClick: () => void; // Pass onClick handler as a prop if needed
}
const SubmitButton = ({ onClick }: SubmitButtonProps) => (
  <div className="submit-button-container">
    <hr className="submit-line" /> {/* This is the horizontal line */}
    <button type="submit" className="submit-button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="44"
        viewBox="0 0 46 44"
      >
        <g fill="none" stroke="#FFF" stroke-width="2">
          <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
        </g>
      </svg>
    </button>
  </div>
);

export default SubmitButton;
