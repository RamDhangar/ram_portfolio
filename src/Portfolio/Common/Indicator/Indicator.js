import React from 'react';
import "./Indicator.css"

function Indicator(props) {
    return (
        <div className="page-indicator">
        <div className="indicator-line"></div>
        <div className="indicator-line-pointer"></div>
      </div>
    );
}

export default Indicator;