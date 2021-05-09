import React, {useEffect, useState} from "react";
import './nav.css';
import {Link} from "react-router-dom";


export default function Nav({size}){

    const [bgColor, setBgColor]= useState("black");

    useEffect( () => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        if(document.documentElement.scrollTop>310){
            setBgColor( "#2C3137")
        }else if(document.documentElement.scrollTop<=50){
            setBgColor( "black")
        }
    }


    return(
        <div>
            {size===0?<nav className=" dt-l w-100 border-box pv4-ns ph5-l sticky"
                           style={{backgroundColor :`${bgColor}`}}>
                    <a className=" dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                        <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
                    </a>
                    <div className=" dtc-l v-mid w-100 w-75-l tc tr-l pv3">
                        <Link className="link dim white f4 dib mr3 mr4-l" to="#" title="Home">Home</Link>
                        <Link className="link dim white f4 dib mr3 mr4-l" to="/SecondTemplate/About" title="How it Works">About</Link>
                        <Link className="link dim white f4 dib mr3 mr4-l" to="/SecondTemplate/Gallery" title="Blog">Gallery</Link>
                        <Link className="link dim white f4 dib mr3 mr4-l" to="/SecondTemplate/Schedule" title="Press">Schedule</Link>
                        <Link className="link dim white f4 dib tr" to="#" title="Contact">Contact</Link>
                    </div>
                </nav>:
                <div/>
            }
        </div>

    );
}