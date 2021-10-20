import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import Nav from "../Nav/Nav";
import data from "./data";
import Footer from "../Footer/Footer";

export default function Upcoming({match, mobile}) {


    const [first, setFirst] = useState(false);
    useEffect(() => {
        if (match.path === "/FirstTemplate") {
            setFirst(true)
        } else {
            setFirst(false)
        }
    }, [])

    AOS.init();

    return (
        <div style={{border: "0.7px solid black"}}>
            <div className={first ? "mr6-ns" : "mr6-ns"}
                 style={first ? {
                     marginBottom: "5%"
                 } : (mobile ? {marginBottom: "10%"} : {marginTop: "10%", marginBottom: "10%"})}>
                {first ? <span/> : <Nav mobile={mobile} first={first}/>}
                <div>
                    <h1
                        style={{fontFamily: "Mak", color: "#465964"}}
                        className="f1 f-headline-ns tc tl-ns ml5-ns"
                    >
                        Termine
                    </h1>
                    <div
                        data-aos={mobile ? "fade-in" : ""}
                        data-aos-duration="2000"
                        className={mobile ? "flex" : ""}
                        style={mobile ? {flexDirection: "column"} : {}}
                    >
                        {

                            <ul className={!mobile ? "ph7 center" : "ph0 center"} style={{listStyleType: "none"}}>
                                {data.map((appointment) => {
                                    return (<AppointmentCard appointment={appointment} mobile={mobile}/>)
                                })}
                            </ul>
                        }
                    </div>
                </div>
            </div>
            {
                !first ?
                    <Footer mobile={mobile} match={match}/> :
                    <div/>
            }
        </div>
    )
}