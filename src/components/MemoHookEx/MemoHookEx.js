import React from 'react';
import  { useState } from 'react';

const computedFunc = (state) => {
  return state * 2;
}

const MemoHookEx = () => {

  const [state, setState] = useState(1);

  const computed = computedFunc(state);

  return(
    <div>
      <h2>MemoHookEx</h2>
    </div>
  )
}

export default MemoHookEx;