import React from 'react';
import masterCard from '../../../assets/img/master_card.png';
import userIcon from '../../../assets/img/user_icon.png';
import './style.css';
import { Link } from 'react-router-dom';

const PersonalDataForm = (props) => {
    return (
        <main className="personal-data-form-container">
            <div className="account-data">
                <div className='user-icon-container'>
                    <img src={userIcon} alt='user icon' />
                </div>
                <div className='user-info-container'>
                    <h1>Conta :</h1>
                    <h2>Bem vindo, Nadson o ferinha!</h2>
                    <div className="payment-information">
                        <div>
                            <span>Informações de pagamento: </span>
                        </div>
                        <img src={masterCard} alt='master card icon'/>
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
                           <Link to="/">Alterar nome</Link>
                           <Link to="/">Alterar email</Link>
                           <Link to="/">Alterar senha</Link>
                        </div>
                        <div className='change-data-option'>
                           <Link to="/">Alterar endereco</Link>
                           <Link to="/">Alterar telefone</Link>
                        </div>
                    </div>
                    <div className="button">
                        <Link className="button-exit" to="/login">sair</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PersonalDataForm;