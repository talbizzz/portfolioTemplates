import React from "react";

export default function AppointmentCard(){
    return(
        <li
            className="flex items-center lh-copy pa4 ph0-l bb b--black-10"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
        >
            <img alt="" className="w2 h2 w3-ns h3-ns br-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KreuzkircheM%C3%BCnchen.JPG/1200px-KreuzkircheM%C3%BCnchen.JPG" />
            <div className="pl3 flex-auto">
                <span className="f3 db baskerville" style={{color: "#465964"}}>Gottesdienst</span>
                <span className="f6 db baskerville" style={{color: "#465964"}}>Kreuzkirche, Hiltenspergerstraße 57, 80796 München, Deutschland</span>
            </div>
            <div>
                <p className="f6 link red hover-dark-grayb tc">08. Nov, <br/> 9:30</p>
            </div>
        </li>
    )
}