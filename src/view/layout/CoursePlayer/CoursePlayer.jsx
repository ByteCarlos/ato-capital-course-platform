import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import backArrow from '../../../assets/img/back-arrow.png';
import userIcon from '../../../assets/img/user_icon.png';

const CoursePlayer = (props) => {
    return (
        <div className="course-player-container">
            <div className="course-player-header">
                <Link to="/home"><img src={backArrow} alt="Botão de Voltar"/></Link>
            </div>
            <div className="course-player-content">
                <h4>Capítulo 1 Aula 1 – O começo</h4>
                <div className="video-player">
                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="sinopse">
                    <p>
                        Você sabe o que é ícone de favoritos?
                        Sabe como configurar o favicon de uma página usando HTML5? Sabe como criar seu próprio arquivo ICO? <br></br>
                        Sabe como converter arquivos PNG em ICO? Sabe usar a tag link para inserir um favicon no seu código? <br></br>
                        Veja a resposta para todas essas perguntas assistindo esse vídeo até o final.
                    </p>
                </div>
                <hr />
                <div className="comments-container">
                    <h4>Comentários:</h4>
                    <div className="comment-input">
                        <img src={userIcon} alt="user icon"/>
                        <input type="text" name="" id="" placeholder="Adicione um comentário" />
                    </div>
                    <div className="comment-text">
                        <img src={userIcon} alt="user icon"/>
                        <div className="content">
                            Sempre muito didático! Estou amando o curso!
                        </div>
                    </div>
                    <div className="comment-text">
                        <img src={userIcon} alt="user icon"/>
                        <div className="content">
                            O meu ta dando erro no 24:47.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePlayer;