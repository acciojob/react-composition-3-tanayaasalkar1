import React from "react";
import Tooltip from "./Tooltip.jsx";

function App() {
  return (
    <div>
      <Tooltip
        toolTipText="This is the first tooltip"
        toolTipTextAnother="This is the second tooltip"
      >
        <h1>Hover over me</h1>
      </Tooltip>
    </div>
  );
}

export default App;
