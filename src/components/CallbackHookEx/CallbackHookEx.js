import React, { useCallback, useEffect, useState } from "react";

const ItemsList = ({getData}) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        const data = getData();
        setState(data);
    }, [getData])

    return (
        <ul>
            {state?.map(el => <li key={el}>{el}</li>)} 
        </ul>
    )
}

const CallbackHookEx = () => {

    const [state, setState] = useState(1);
    const [state2, setState2] = useState(1);

    const getData = useCallback(() => {
        console.log('render!');

        return new Array(state).fill(null).map((_,idx) => `Element ${idx + 1}`);
    }, [state]) 

    return(
        <div>
            <h3>CallbackHookEx</h3>
            <h4>{state2}</h4>
            <p>
            <button onClick={() => setState(state + 1)}>Click!</button>
            <button onClick={() => setState2(state2 + 1)}>Click 2!</button>
            </p>
            <ItemsList getData={getData}/>
        </div>
    )
}

export default CallbackHookEx;