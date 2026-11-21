
import React, { useState } from "react";
import './../styles/App.css';

const Tooltip = ({ toolTipText, toolTipTextAnother, children }) => {
  const [isShow, setShow] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}

      <div
        className="tooltip"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
        <span className="tooltiptext">{toolTipText}</span>
      </div>

      <hr />

      <div
        className="tooltip"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <h2>Hover over me to see another tooltip</h2>
        <span className="tooltiptext">{toolTipTextAnother}</span>
      </div>

      <hr />
    </div>
  );
};

export default Tooltip;
