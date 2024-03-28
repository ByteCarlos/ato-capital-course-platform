import React from "react";
import LoginForm from "../../layout/LoginForm/LoginForm";
import './style.css'

const Login = (props) => {
    return (
        <div className="login-container">
            <h4 className="page-title">ATOS CAPITAL</h4>
            <LoginForm />
        </div>
    );
}

export default Login;