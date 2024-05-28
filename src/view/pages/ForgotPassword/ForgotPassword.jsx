import React from "react";
import Footer from "../../layout/Footer/Footer";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "../../layout/ForgotPasswordForm/ForgotPasswordForm";

import './style.css';

const ForgotPassword = (props) => {
    return (
        <div className="forgot-password-container">
            <header>
                <h4 className="page-title">ATOS CAPITAL</h4>
                <Link to="/login">Entrar</Link>
            </header>
            <ForgotPasswordForm />
            <Footer />
        </div>
    );
}

export default ForgotPassword;