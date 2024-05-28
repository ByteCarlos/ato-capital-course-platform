import React from "react";

import './style.css';

const ForgotPasswordForm = (props) => {

    const onSubmit = () => {
        try {
            // @todo implementar algoritmo para chamar 
            // uma instancia Service para a rota da API
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="forgot-password-form-container">
            <div className="form-container">
                <form className="form" onSubmit={onSubmit} data-form>
                    <h4>Esqueceu do e-mail/palavra-passe</h4>
                    <p>Como gostaria de redefinir a sua palavra passe?</p>
                    <div className="select">
                        <div className="line">
                            <input type="radio" name="" id="" />
                            <span>Email</span>
                        </div>
                        <div className="line">
                            <input type="radio" name="" id="" />
                            <span>Mensagem de texto (SMS)</span>
                        </div>
                    </div>
                    <p>
                        Enviaremos uma mensagem de correio eletrônico com<br></br>
                        instruções sobre como redefinir a sua palavra-passe.
                    </p>
                    <input type="email" name="" id=""  placeholder="nome@exemplo.com"/>
                    <button className="button-submit" data-button-submit>Enviar Email</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;