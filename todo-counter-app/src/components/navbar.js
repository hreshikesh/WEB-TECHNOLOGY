import { useState } from "react";


const NavBar=()=>{

    const[mode,setMode]=useState(true);

    function handleMode(){
        setMode(!mode)
        document.body.style.backgroundColor=mode?"white":"black";
    }
    return(
        <div>
            <nav className="navBarStyle">
                <div className="navContainer">
                <h5 className="navBarHeading">COUNTER AND TODO APP </h5>
                <button type="button" className="modeButton" onClick={handleMode}>Mode</button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
