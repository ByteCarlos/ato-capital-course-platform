import React from "react";
import './style.css';

import sideButton from '../../../assets/img/side_button.png';
import MiniPlayer from "../../components/MiniPlayer/MiniPlayer";

const CourseSideBar = (props) => {
    return (
        <div className="course-side-bar-container">
            <div className="side-button-container">
                <img src={sideButton} alt="side button" />
            </div>
            <h4>Trilha conhecimento</h4>
            <MiniPlayer lock={true} order={2}/>
            <MiniPlayer lock={true} order={3}/>
            <MiniPlayer lock={true} order={4}/>
            <MiniPlayer lock={true} order={5}/>
        </div>
    );
}

export default CourseSideBar;