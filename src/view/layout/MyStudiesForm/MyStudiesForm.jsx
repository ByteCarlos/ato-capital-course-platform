import React from "react";
import './style.css';
import logo from '../../../assets/img/Header Logo.png'
import UserIcon from '../../../assets/img/image 8.svg'

const MyStudiesForm = (props) => {
    return (
        <>
        <header>
        <div className="header-content container">
          <div>
            <a href="#"><img src={logo} /></a>
          </div>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" className="input" />
              </div>
        </div>
    </header>
    <main>
        <section className="my-studies-container">
            <div className="my-studies-user">
                <img src={UserIcon} alt="" />
                <a className=" button-couser-archives" href="#"> Curso Arquivados </a>
            </div>
            <div className="my-studies-couser">
                <a className=" button-couser-archives" href="#"> Arquivar Curso</a>
                <div className="couser-content">
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                    <div className="couser">
                        <iframe width="337" height="187" src="https://www.youtube.com/embed/Ft-yvy7SGgk?si=pOwuisbiwt1VbWNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="couser-progress">
                            <span>30%</span>
                        </div>
                        <h2>Nome do Curso</h2>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
    );
};

export default MyStudiesForm