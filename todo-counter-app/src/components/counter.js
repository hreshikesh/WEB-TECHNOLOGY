import { useState } from "react";

const Counter=()=>{
    const[count,setCounter]=useState(0);
    const[toggle,setToggle]=useState(true);


    function handleIncrement(){
        setCounter(count+1)
    }


    function handleDecrement(){
        setCounter(count-1)
    }

    function handleToggle(){
        setToggle(!toggle)
    }

    return(
    <div>
        <h1>Counter App</h1>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
        <button type="button" onClick={handleToggle}>Toggle</button>
        {toggle && <h4>Count={count}</h4>}
    </div>
    )
}

export default Counter;