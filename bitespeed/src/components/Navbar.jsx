import "../assets/styles/Navbar.css";

export const Navbar = ({ hasError, validateOnSave }) => {
  return (
    <div className="navbar">
      {hasError && (
        <span className="navbar__error-section">
          Cannot save flow
        </span>
      )}
      <button onClick={validateOnSave}>Save Changes</button>
    </div>
  );
};
