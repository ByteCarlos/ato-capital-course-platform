import React from "react";
import './style.css';
import Header from "../../layout/Home/Header/Header";
import Banner from "../../layout/Home/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";

import htmlImage from '../../../assets/img/html.png';
import cssImage from '../../../assets/img/css.png';
import reactImage from '../../../assets/img/react.png';
import nodeImage from '../../../assets/img/node.png';

const Home = (props) => {
    const coursesImages = {htmlImage: htmlImage, cssImage: cssImage, reactImage: reactImage, nodeImage: nodeImage};

    return (
        <div className="home-container">
            <Header />
            <Banner />
            <main>
                <Carousel coursesImages={coursesImages}/>
                <Carousel coursesImages={coursesImages}/>
                <Carousel coursesImages={coursesImages}/>
            </main>
        </div>
    );
}

export default Home;