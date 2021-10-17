import React from "react";

export default function AppointmentCard({appointment, mobile}){
    return(
            <li
                className="ml5-ns flex items-center lh-copy pv4-ns ph0 bb b--black-10 pt0"
                data-aos={!mobile?`${appointment.right ? "fade-right" : "fade-left"}`:""}
                data-aos-duration="1000"
            >
                <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KreuzkircheM%C3%BCnchen.JPG/1200px-KreuzkircheM%C3%BCnchen.JPG" />
                <div className="ph3 flex-auto">
                    <span className="f3 db baskerville" style={{color: "#465964"}}>{appointment.title}</span>
                    <span className="f6 db baskerville" style={{color: "#465964"}}>{appointment.address}</span>
                </div>
                <div>
                    <p className="f6 link red hover-dark-grayb tc">{appointment.date}, <br/> {appointment.time}</p>
                </div>
            </li>
    )
}