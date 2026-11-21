
import React from "react";
import './../styles/App.css';


const Tooltip = ({toolTipText, toolTipTextAnother}) => {
  const [isShow, setShow] = useState(false);

  function showTooltip() {
    setShow(true);
  }
  function hideTooltip() {
    setShow(false);
  }
  return (
    <div>
        {/* Do not remove the main div */}
  {isShow ?<p className="tooltiptext">{toolTipText}</p> : null}
        <h1 className="tooltip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Hover over me</h1>
        <hr/>
     {isShow ? <p className="tooltiptext">{toolTipTextAnother} </p>: null}
        <h2 className="tooltip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Hover over me to see another tooltip</h2>
        <hr/>

    </div>
  )
}

export default Tooltip
