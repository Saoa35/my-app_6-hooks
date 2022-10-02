import React from 'react';
import  { useState } from 'react';

const MemoHookEx = () => {

  const [state, setState] = useState(1);

  return(
    <div>
      <h2>MemoHookEx</h2>
    </div>
  )
}

export default MemoHookEx;