import React from "react";
import "./AppButton.css"

function AppButton(props) {
  return (
    <div className="btn">
      <button 
      onClick={props.clickEvent}
      className={props.isPrimary ? "primary-btn btn" : "secondary-btn btn"}
      >
        {props.label}
      </button>
    </div>
  );
}

export default AppButton;
