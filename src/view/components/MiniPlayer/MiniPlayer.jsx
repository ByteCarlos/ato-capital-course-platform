import React from "react";
import './style.css';

import lockIcon from '../../../assets/img/lock_icon.png';

const MiniPlayer = (props) => {
    return (
        <div className="mini-player-container">
            <div className="order">Aula {props.order}</div>
            <div className="player">
                {props.lock ? (
                    <img src={lockIcon} alt="lock icon" />
                ) : ("")}
            </div>
            <div className="title">Título  : xxxxx</div>
        </div>
    );
}

export default MiniPlayer;