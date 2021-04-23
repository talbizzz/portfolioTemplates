import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppointmentCard from "../AppointmentCard/AppointmentCard";
export default function Upcoming(){
    AOS.init();
    return(
        <div className={"bt b--dark-blue-05 ml2 ml6-ns mr6"} style={{marginTop:"35%"}}>
            <div>
                <h1
                    style={{ fontFamily: "Mak", color:"#465964"}}
                    className="f1 f-headline-ns tc tl-ns"
                >
                    Termine
                </h1>
                <ul className="ph7-ns center ">
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                </ul>
            </div>
        </div>
    )
}