import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import Nav2 from "../Nav/Nav2";
export default function Upcoming({match}){
    const [first, setFirst]= useState(false);
    useEffect(() => {
        if(match.path==="/FirstTemplate"){
            setFirst(true)
        }else{
            setFirst(false)
        }
        console.log(first)
    }, [])
    AOS.init();
    return(
        <div className={"bt b--dark-blue-05 mr6"} style={first ? {marginTop:"35%"} : {marginTop:"5%"}}>
            {first? <span/> : <Nav2 size={0}/>}
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