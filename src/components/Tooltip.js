
import React from "react";
import './../styles/App.css';


const Tooltip = ({toolTipText, toolTipTextAnother}) => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Hover over me</h1>
        <hr/>
        <h2>Hover over me to see another tooltip</h2>
        <hr/>

    </div>
  )
}

export default Tooltip
