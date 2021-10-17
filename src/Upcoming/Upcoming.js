import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import Nav from "../Nav/Nav";
import data from "./data";
import Footer from "../Footer/Footer";

export default function Upcoming({match, mobile}){


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
        <div>
            <div className={first? " bt b--dark-blue-05 mr6-ns": "b--dark-blue-05 mr6-ns"} style={first ? {marginTop:"35%"} : {marginTop:"10%"}}>
                {first? <span/> : <Nav mobile={mobile} first={first}/>}
                <div>
                    <h1
                        style={{ fontFamily: "Mak", color:"#465964"}}
                        className="f1 f-headline-ns tl tl-ns ml5-ns"
                    >
                        Termine
                    </h1>
                    <div
                        data-aos={mobile?"fade-in":""}
                        data-aos-duration="2000"
                    >
                        {
                            !mobile ?
                                <ul className=" ph7 center ">
                                    {data.map((appointment) => {
                                        return (<AppointmentCard appointment={appointment} mobile={mobile}/>)
                                    })}
                                </ul> :
                                <ul className=" ph2 ">
                                    {data.map((appointment) => {
                                        return (<AppointmentCard appointment={appointment} mobile={mobile}/>)
                                    })}
                                </ul>
                        }
                    </div>
                </div>
            </div>
            {
                !first?
                    <Footer mobile={mobile} match={match}/>:
                    <div/>
            }
        </div>
    )
}