import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import './responsiveness.css'

const LoginForm = (props) => {
    // eslint-disable-next-line
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSubmit = () => {
        try {
            // @todo implementar algoritmo para chamar 
            // uma instancia Service para a rota da API
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={onSubmit} data-form>
                <h4 className="form-title">Entrar</h4>
                <div className="form-control">
                    <input onChange={handleChange} className="email-fieldset" type="text" name="email" placeholder="Email ou número de telefone"/>
                </div>
                <div className="form-control">
                    <input onChange={handleChange} className="password-fieldset" type="password" name="password" placeholder="Senha" />
                </div>
                <div className="button-submit-container">
                    <button className="button-submit" data-button-submit>Entrar</button>
                </div>
                <div className="forgot-password-container">
                    <span>Esqueceu a senha?</span>
                </div>
                <div className="remember-me-container">
                    <input type="checkbox" name="remember" id="remember" />
                    <span>Lembre-se de mim</span>
                </div>
                <div className="sign-up-container">
                    <span className="new-here-text">Novo por aqui?</span>
                    <Link to="/register"><span className="sign-up-link">Cadastre-se</span></Link> 
                </div>
            </form>
        </div>
    )
}

export default LoginForm;