import React, {useState, useEffect} from "react";
import './CircularProgressBar.css'
function CircularProgressBar({ lable, percentage, circleWidth, ...props}) {
  const radius = props.radius ? props.radius : circleWidth/100 * 42;
  const dashArray = radius * Math.PI * 2;
  const [progress, setProgress] = useState(0);
  const dashOffset = dashArray - (dashArray * progress) / 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < percentage) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [percentage, progress]);

  return ( 
    <div className="circular-progress-contianer">
        <span>{lable}</span>
      <svg
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        style={{
            height: props.svgHight ? props.svgHight : "5rem" 
        }}
      >
        <defs>
            <linearGradient id="gradient">
                <stop offset='10%' stop-color="#12c2e9"/>
                <stop offset='50%' stop-color="#c471ed"/>
                <stop offset='100%' stop-color="#f65f59"/>
            </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={props.strikeWidth ? props.strikeWidth : "15px"}
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={props.strikeWidth ? props.strikeWidth : "15px"}
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
          transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
          stroke="url(#gradient)"
        />
        <text x='50%' y='50%' textAnchor="middle" fill="url(#gradient)" style={{fontSize: props.textSize && props.textSize}} className="circle-text">{progress}%</text>
      </svg>
      
    </div>
  );
}

export default CircularProgressBar;
