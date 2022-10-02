import React from 'react';
import  { useState } from 'react';

const computedFunc = (state) => {
  return state * 2;
}

const MemoHookEx = () => {

  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);


  const computed = computedFunc(state);

  return(
    <div>
      <h2>MemoHookEx</h2>
      <h4>
        comp: {computed}
      </h4>

      <p>
        <button onClick={() => setState(computed + 1)}>Click!</button>
      </p>
    </div>
  )
}

export default MemoHookEx;