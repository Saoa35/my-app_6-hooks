import React from "react";
import { useState } from "react";

const StateHookEx = () => {

  const [psi, setPsi] = useState(null);
  
  const [atm, setAtm] = useState(null);

  const handleClick = () => {

    setPsi(psi + 1 * 14.6959);
    setAtm(atm + 1);
  }

  return(
    <div>
        <h3>StateHookEx</h3>
        <button onClick={handleClick}>
          Click
        </button>
        <h4>Давление равно: {psi} psi</h4>
    </div>
  )
}

export default StateHookEx;