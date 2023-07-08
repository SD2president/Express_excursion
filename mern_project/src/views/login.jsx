import React from "react";

const Login = () => {
    return(
    <div>
        <div className="login">
            <h1 id="logID">
                Login
            </h1>
            <form className="logForm">
                Username: <input type="text" /*placeholder="Username"*/></input>
                Password: <input type="text" /*placeholder="Password"*/></input>
                <button className="logButt">Login</button>
            </form>
        </div>
    </div>
    )
}
export default Login