import React, {useEffect, useState} from 'react';
import background1 from '../Pictures/principalBackground2.png'
import background2 from '../Pictures/principalBackground.jpeg'
import './FirstTemplate.css'
import Nav from '../Nav/Nav'
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Upcoming from "../Upcoming/Upcoming";
import Footer from "../Footer/Footer";

export default function FirstTemplate(){
    const [size, setSize]= useState(0);

    useEffect(() => {
        console.log("window:"+window.innerWidth)
        if(window.innerWidth>600){
            setSize(0)
        }else{
            setSize(1)
        }
    }, )

    const backgroundStyle= {
        background: size===0? `url(${background1}) no-repeat center top fixed`:  `url(${background2}) no-repeat center top`
    }

    return(
        <div>
            <article className="athelas">
                <div className="vh-100 w-100 tc bg-dark-gray white cover"
                     style={backgroundStyle}>
                    <Nav size={size}/>
                    <div className={"tc tl-ns ml5-ns ba-m b--white w-20-ns"}>
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
            <div id={"about"}/>
            <About/>
            <div id={"gallery"}/>
            <Gallery/>
            <div id={"upcoming"}>
                <Upcoming/>
            </div>
            <div id={"footer"}>
                <Footer/>
            </div>
        </div>


    )
}