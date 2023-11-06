import React, { useState, useEffect } from "react";
import '../style-sheets/style-progressBar.css';
const ProgressBar = ({ percent }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percent);
  }, [percent]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${width}%` }}>
        {width}%
      </div>
    </div>
  );
};

export default ProgressBar;