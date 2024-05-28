import React from "react";
import './style.css';
import Header from "../../layout/Home/Header/Header";
import Banner from "../../layout/Home/Banner/Banner";

const Home = (props) => {
    return (
        <div className="home-container">
            <Header />
            <Banner />
        </div>
    );
}

export default Home;