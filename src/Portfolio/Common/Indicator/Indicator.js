import React from 'react';
import "./Indicator.css"

function Indicator(props) {
    return (
      <div className='indicator'>
        <h2>{props.lable}</h2>
        <div className="page-indicator">
        <div className="indicator-line"></div>
        <div className="indicator-line-pointer"></div>
      </div>
      </div>
    );
}

export default Indicator;