import React, { useMemo, useState } from 'react';


const computedFunc = (state) => {
  return state * 2;
}

const MemoHookEx = () => {

  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);


  const computed = useMemo(() => computedFunc(state), [state]);

  return(
    <div>
      <h2>MemoHookEx</h2>
      <h4>
        comp: {computed} comp2: {state2}
      </h4>

      <p>
        <button onClick={() => setState(computed + 1)}>Click!</button>
        <button onClick={() => setState2(state2 + 1)}>Click 2!</button>
      </p>
    </div>
  )
}

export default MemoHookEx;