import React from "react";
import { useState } from "react";

const StateHookEx = () => {

  const [state, setState] = useState(0);

  return(
    <div>
        <h3>StateHookEx</h3>
    </div>
  )
}

export default StateHookEx;