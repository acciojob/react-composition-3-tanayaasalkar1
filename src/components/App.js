import React from 'react';
import { useState } from 'react'
import Tooltip from './Tooltip'

  const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
    <Tooltip toolTipText={"This is a tooltip"} toolTipTextAnother={"This is another tooltip"}/>
    </div>
  )
}

export default App
