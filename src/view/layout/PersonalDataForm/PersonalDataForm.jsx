import React from 'react';
import masterCard from '../../../assets/img/master_card.png';
import userIcon from '../../../assets/img/user_icon.png';
import './style.css';

const PersonalDataForm = (props) => {
    return (
        <main className="personal-data-form-container">
            <div className="account-data">
                <div className='user-icon-container'>
                    <img src={userIcon} />
                </div>
                <div className='user-info-container'>
                    <h1>Conta :</h1>
                    <h2>Bem vindo, Nadson o ferinha!</h2>
                    <div className="payment-information">
                        <div>
                            <span>Informações de pagamento: </span>
                        </div>
                        <img src={masterCard} />
                        <span> **** **** *** 3100 </span>
                        <span>Expira em 00/00</span>
                    </div>
                    <div className="registration-data">
                        <div className='registration-data-title'>
                            <span>Dados cadastrais: </span>
                        </div>
                        <div className='registration-data-info'>
                            <span>exemple@exemple.com</span>
                            <span>Senha: **********</span>
                            <span>Telefone:  (00)40028922</span>
                            <span>Endereço: Avenida Capital, Rua atos
                                Bloco real, Apartamento 303 N°: 4002
                            </span>
                        </div>
                    </div>
                    <div className="change-data">
                        <div className='change-data-option'>
                            <a href="#">Alterar nome</a>
                            <a href="#">Alterar email</a>
                            <a href="#">Alterar senha</a>
                        </div>
                        <div className='change-data-option'>
                            <a href="#">Alterar endereco</a>
                            <a href="#">Alterar telefone</a>
                        </div>
                    </div>
                    <div className="button">
                        <a className="button-exit" href="#">sair</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PersonalDataForm;