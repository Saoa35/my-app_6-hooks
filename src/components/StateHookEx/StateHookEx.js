import React from "react";
import { useState } from "react";

const StateHookEx = () => {

  const [state, setState] = useState(0);

  const handleClick = () => {

  }

  return(
    <div>
        <h3>StateHookEx</h3>
        <button onClick={handleClick}>
          Click
        </button>
        <h4>{state}</h4>
    </div>
  )
}

export default StateHookEx;