import { useState } from "react";
import "../assets/styles/Navbar.css";

export const Navbar = ({ nodes, edges }) => {
  const [hasError, setHasError] = useState(false);

  const validateOnSave = () => {
    const targets = [...new Set(edges.map((edge) => edge.target))];
    setHasError(nodes?.length - targets?.length >= 2);
  };

  return (
    <div className="navbar">
      {hasError && (
        <span className="navbar__error-section">
          Cannot save Flow
        </span>
      )}
      <button onClick={validateOnSave}>Save Changes</button>
    </div>
  );
};
