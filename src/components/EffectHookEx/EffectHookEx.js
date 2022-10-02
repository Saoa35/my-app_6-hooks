import React, { useEffect, useState } from "react";


const EffectHookEx = () => {

  const [data, setData] = useState(null);

  const [id, setId] = useState(1);

  useEffect(() => {
    console.log('render in useEffect');

    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));

  }, [id]);

  const handleClick = () => {

   setId(id + 1)
  }

  console.log('render', data);  

  return(
    <div>
      <h2>EffectHookEx</h2>
      <button onClick={handleClick}>
          Click
        </button>

      {/* {data ? data.map(item => <p key={item.id}>{item.title}</p>) : 'Loading...'} */}
      {/* {data?.map(item => <p key={item.id}>{item.title}</p>)} */}
    </div>
  )
}

export default EffectHookEx;