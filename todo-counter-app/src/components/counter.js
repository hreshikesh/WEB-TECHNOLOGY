import { useState } from "react";
import '../App.css';

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
        <div className="buttonContainer">
        <button type="button" onClick={handleIncrement} className="incrementButton">Increment</button>
        <button type="button" onClick={handleDecrement} className="decrementalButton">Decrement</button>
        <button type="button" onClick={handleToggle} className="toggleButton">Toggle</button>
        </div>
        {toggle && <h4 className="countStyle">Count={count}</h4>}
    </div>
    )
}

export default Counter;