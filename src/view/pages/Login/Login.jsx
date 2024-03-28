import React from "react";
import LoginForm from "../../layout/LoginForm/LoginForm";
import './style.css'
import Footer from "../../layout/Footer/Footer";

const Login = (props) => {
    return (
        <div className="login-container">
            <h4 className="page-title">ATOS CAPITAL</h4>
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;