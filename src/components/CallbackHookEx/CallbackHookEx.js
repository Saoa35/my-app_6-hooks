import React, { useEffect, useState } from "react";

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

    const getData = () => {
        console.log('render!');

        return new Array(state).fill(null).map((_,idx) => `Element ${idx + 1}`);
    }

    return(
        <div>
            <h3>CallbackHookEx</h3>
            <ItemsList getData={getData}/>
        </div>
    )
}

export default CallbackHookEx;