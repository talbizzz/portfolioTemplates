import React, {useEffect, useState} from "react";
import Nav from "../Nav/Nav";
import backgroundWeb from '../Pictures/principalBackground2.png'
import backgroundMobile from '../Pictures/principalBackground.jpeg'

export default ({first, mobile}) => {

    const width = window.innerWidth
    const height = window.innerHeight


    const backgroundStyle= {
        background: !mobile? `url(${backgroundWeb}) no-repeat center top fixed`:  `url(${backgroundMobile}) no-repeat center top`
    }
    return(
        <div>
            <article className="athelas">
                <div className="vh-100 w-100 tc bg-dark-gray white cover"
                     style={backgroundStyle}>
                    <Nav first={first} mobile={mobile}/>
                    <div className={"tc tl-ns ml5-ns w-20-ns"}>
                        <h3 className={"pt7"}>
                            <span data-aos={"fade-down"} data-aos-duration="500">R</span>
                            <span data-aos={"fade-up"} data-aos-duration="700">E</span>
                            <span data-aos={"fade-down"} data-aos-duration="900">B</span>
                            <span data-aos={"fade-up"} data-aos-duration="1100">E</span>
                            <span data-aos={"fade-down"} data-aos-duration="1200">K</span>
                            <span data-aos={"fade-up"} data-aos-duration="1400">A</span>
                        </h3>
                        <h3>
                            <span data-aos={"fade-down"} data-aos-duration="1900">S</span>
                            <span data-aos={"fade-up"} data-aos-duration="1700">T</span>
                            <span data-aos={"fade-down"} data-aos-duration="1500">O</span>
                            <span data-aos={"fade-up"} data-aos-duration="1300">J</span>
                            <span data-aos={"fade-down"} data-aos-duration="1100">K</span>
                            <span data-aos={"fade-up"} data-aos-duration="900">O</span>
                            <span data-aos={"fade-down"} data-aos-duration="700">S</span>
                            <span data-aos={"fade-up"} data-aos-duration="500">K</span>
                            <span data-aos={"fade-down"} data-aos-duration="300">A</span>
                        </h3>
                        <h1 data-aos={"zoom-in"} data-aos-duration="3000" >Pianist.</h1>
                    </div>
                </div>
            </article>
        </div>
    )
}