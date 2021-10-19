import React from 'react';
import './FirstTemplate.css'
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Upcoming from "../Upcoming/Upcoming";
import Footer from "../Footer/Footer";
import TitleText from "../TitleText/TitleText";

export default function FirstTemplate({mobile}){
    const match = { path: "/FirstTemplate"}

    return(
        <div>
            <TitleText first={true} mobile={mobile}/>
            <div id={"about"}/>
                <About match={match} mobile={mobile}/>
            <div id={"gallery"}/>
                <Gallery match={match} mobile={mobile}/>
            <div id={"upcoming"}>
                <Upcoming match={match} mobile={mobile}/>
            </div>
            <div id={"schedule"}>
                <Footer match={match} mobile={mobile} first={true}/>
            </div>

        </div>


    )
}