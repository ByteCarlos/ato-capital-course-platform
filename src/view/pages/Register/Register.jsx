import React from "react";
import RegisterForm from "../../layout/RegisterForm/RegisterForm";
import Footer from "../../layout/Footer/Footer";
import './style.css';

const Register = (props) => {
    return (
        <div className="register-container">
            <h4 className="page-title">ATOS CAPITAL</h4>
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default Register;