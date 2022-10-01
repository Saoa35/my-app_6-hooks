import React, { useEffect, useState } from "react";


const EffectHookEx = () => {

  const [data, setData] = useState();

  useEffect(() => {
    console.log('render in useEffect');

    const url = 'https://jsonplaceholder.typicode.com/todos/';

      fetch(url)
        .then(res => res.json())
        .then(data => setData(data));

  });

  console.log('render');

  return(
    <div>
      <h2>EffectHookEx</h2>
    </div>
  )
}

export default EffectHookEx;