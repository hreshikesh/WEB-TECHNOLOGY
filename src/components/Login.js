import '../App.css';
import { useState } from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div className="card">
            <h3 className={isLoggedIn ? "success" : "error"}>
                {isLoggedIn ? "Welcome User" : "Please Login"}
            </h3>
            <button onClick={handleLogin} className='loginButton'>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Login;