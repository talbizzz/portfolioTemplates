import React, {useEffect, useState} from "react";
import './nav.css';


export default function Nav({first, mobile}) {

    const [bgColor, setBgColor] = useState("black");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 310) {
            setBgColor("#2C3137")
        } else if (document.documentElement.scrollTop <= 50) {
            setBgColor("black")
        }
    }

    return (
        <div>
            {
                !mobile ?
                    <nav className=" dt-l w-100 border-box pv3-ns ph5-l sticky"
                         style={{backgroundColor: `${bgColor}`}}>
                        <a className=" dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/portfolioTemplates"
                           title="Home">
                            <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
                        </a>
                        <div className=" dtc-l v-mid w-100 w-75-l tc tr-l pv3">
                            <a className="link dim white f4 dib mr3 mr4-l" href={`${first ? "#" : "/portfolioTemplates/SecondTemplate"}`}
                               title="Home">Home</a>
                            <a className="link dim white f4  dib mr3 mr4-l"
                               href={`${first ? "#about" : "/portfolioTemplates/SecondTemplate/About"}`} title="How it Works">About</a>
                            <a className="link dim white f4  dib mr3 mr4-l"
                               href={`${first ? "#gallery" : "/portfolioTemplates/SecondTemplate/Gallery"}`} title="Blog">Gallery</a>
                            <a className="link dim white f4  dib mr3 mr4-l"
                               href={`${first ? "#upcoming" : "/portfolioTemplates/SecondTemplate/schedule"}`} title="Press">Schedule</a>
                            {first ?
                                <a className="link dim white f4  dib tr"
                                    href={`${"#schedule"}`} title="Contact">Contact</a>:
                                <></>
                            }
                        </div>
                    </nav> :
                    <nav className=" dt-l w-100 border-box pv3-ns ph5-l ph0 sticky"
                         style={{backgroundColor: `${bgColor}`}}>
                        <div className=" dtc-l v-mid w-100 w-75-l tc tr-l pv3">
                            <a className="link dim white f4-ns dib mr3 mr4-l" href={`${first ? "#" : "/portfolioTemplates/SecondTemplate"}`}
                               title="Home">Home</a>
                            <a className="link dim white f4-ns  dib mr3 mr4-l"
                               href={`${first ? "#about" : "/portfolioTemplates/SecondTemplate/About"}`} title="How it Works">About</a>
                            <a className="link dim white f4-ns  dib mr3 mr4-l"
                               href={`${first ? "#gallery" : "/portfolioTemplates/SecondTemplate/Gallery"}`} title="Blog">Gallery</a>
                            <a className="link dim white f4-ns  dib mr3 mr4-l"
                               href={`${first ? "#upcoming" : "/portfolioTemplates/SecondTemplate/schedule"}`} title="Press">Schedule</a>
                            {first ?
                                <a className="link dim white f4  dib tr"
                                   href={`${"#schedule"}`} title="Contact">Contact</a>:
                                <></>
                            }
                        </div>
                    </nav>

            }
        </div>

    );
}