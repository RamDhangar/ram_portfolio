import React from "react";
import "./AppButton.css"

function AppButton(props) {
  return (
    <span className="btn">
      <button 
      onClick={props.clickEvent}
      className={props.isPrimary ? "primary-btn" : "secondary-btn"}
      >
        {props.label}
      </button>
    </span>
  );
}

export default AppButton;
