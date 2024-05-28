import React from "react";
import './style.css';

const Banner = (props) => {
    return (
        <div className="banner-container">
            <div className="left-container">
                <h4>Descubra um universo de cursos para a área de TI em<br></br> nosso site.</h4>
                <p>Descubra o poder da aprendizagem <br></br>transformadora em nossa plataforma de cursos,<br></br> onde o conhecimento se encontra com a <br></br>inovação! </p>
            </div>
            <div className="right-container"></div>
        </div>
    );
}

export default Banner;