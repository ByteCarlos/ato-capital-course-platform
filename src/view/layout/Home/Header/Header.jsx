import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import lupa from '../../../../assets/img/lupa.png';

const Header = (props) => {
    return (
        <header className="home-header">
            <div className="left-header-content">
                <h4 className="business-name">ATOS CAPITAL</h4>
                <div className="links-container">
                    <Link to="/home">Categorias</Link>  
                    <Link to="/home">Meus Cursos</Link>
                    <Link to="/home">Favoritos</Link>
                </div>
            </div>
            <div className="right-header-container">
                <input type="text" name="search" id="search" />
                <img src={lupa} alt="ícone de pesquisa"/>
            </div>
        </header>
    );
}

export default Header;