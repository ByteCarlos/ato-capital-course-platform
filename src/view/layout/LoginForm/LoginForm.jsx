import React from "react";
import './style.css';

const LoginForm = (props) => {

    const onSubmit = () => {
        console.log('submit...')
    }

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={onSubmit} data-form>
                <h4 className="form-title">Entrar</h4>
                <div className="form-control">
                    <input className="email-fieldset" type="text" name="email" placeholder="Email ou número de telefone"/>
                </div>
                <div className="form-control">
                    <input className="password-fieldset" type="password" name="password" placeholder="Senha" />
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
                    <span className="sign-up-link">Cadastre-se</span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;