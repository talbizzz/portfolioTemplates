import React from "react";

export default function Button({path, description}){
    return(
        <a href="/firstTemplate#gallery"
           className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ">
            <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                <title>chevronLeft icon</title>
                <path d={path}/>
            </svg>
            <span className="pl1">{description}</span>
        </a>
    )
}