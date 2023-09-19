import React , {useState, useEffect} from "react";
import "./ProgressBar.css";

function ProgressBar({ lable, percentage, width, ...props }) {

  const [progress, setProgress] = useState(0);
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
    <div className="progress-container1">
      <div className="lable">
        <span>{lable}</span>
        <span>{progress}%</span>
      </div>
      <input
        className="progress-input"
        type="range"
        value={progress}
        min="1"
        max="100"
        step="1"
      />
    </div>
  );
}

export default ProgressBar;
