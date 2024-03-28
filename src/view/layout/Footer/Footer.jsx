import React from "react";
import './style.css';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="first-line">
                <span>Dúvidas? Ligue 0800 591 2876</span>
            </div>
            <div className="second-line">
                <span>Perguntas Frequentes</span>
                <span>Central de Ajuda</span>
                <span>Termos de Uso</span>
                <span>Privacidade</span>
            </div>
            <div className="three-line">
                <span>Preferência de cookies</span>
                <span>Informações corporativas</span>
            </div>
        </div>
    );
}

export default Footer;