import "../App.css"
import React, {useState} from "react";
import {Link} from "react-router-dom";
import SwitchButton from "./SwitchButton/SwitchButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function Welcome({mobile}) {

    const [dark, setDark]= useState(true);

    const linksStyle= dark?{
        textAlign: "center",
        color: "white",
        textDecoration:"none"
    }:{
        textAlign: "center",
        color: "#000A2E",
        textDecoration:"none"
    }

    let headerClassName= dark? "App-header-dark": "App-header-light";

        return(
                <header className={headerClassName}>
                    <div style={{margin:"2% 5%"}}>
                        <SwitchButton onClick={() => {
                            setDark(prevState => !prevState)
                        }} />
                    </div>
                    <div  style={{marginTop:mobile?"50%":"12%"}} >
                        <div data-aos={"fade-down-right"} data-aos-duration="3000">
                            <Link style={linksStyle} to={"/firstTemplate"}>
                                <h1 className={"grow"}>First Model</h1>
                            </Link>
                        </div>
                        <div data-aos={"fade-up-left"} data-aos-duration="3000">
                            <Link style={linksStyle} to={"/secondTemplate"}>
                                <h1>Second Model</h1>
                            </Link>
                        </div>
                    </div>
                </header>
        )


}

