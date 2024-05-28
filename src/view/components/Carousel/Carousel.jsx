import React from "react";
import './style.css';

import arrowLeft from '../../../assets/img/arrow-left.png';
import arrowRight from '../../../assets/img/arrow-right.png';

const Carousel = (props) => {

    const images = props.coursesImages;

    function redirectToCourseView() {
        window.location.href = '/courseview';
    }

    return (
        <div className="carousel-container">
            <div className="left-arrow">
                <img src={arrowLeft} alt="Seta para esquerda" />
            </div>
            <div className="course-banner" onClick={redirectToCourseView}>
                <img src={images.htmlImage} alt="course"/>
            </div>
            <div className="course-banner" onClick={redirectToCourseView}>
                <img src={images.cssImage} alt="course"/>
            </div>
            <div className="course-banner" onClick={redirectToCourseView}>
                <img src={images.reactImage} alt="course"/>
            </div>
            <div className="course-banner" onClick={redirectToCourseView}>
                <img src={images.nodeImage} alt="course"/>
            </div>
            <div className="right-arrow">
                <img src={arrowRight} alt="Seta para direita" />
            </div>
        </div>
    );
}

export default Carousel;