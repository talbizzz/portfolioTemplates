import React, {useEffect, useState} from "react"
import imagePort from "../Pictures/imagePort.jpeg"
import imageAudiosVids from "../Pictures/imageAudiosVids.jpeg"
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav";


export default function Gallery({match, mobile}){
    const [first, setFirst]= useState(false);
    useEffect(() => {
        if(match.path==="/FirstTemplate"){
            setFirst(true)
        }else{
            setFirst(false)
        }
        console.log(first)
    }, [])



    return(
            <div className={"mb5"}>
                {first? <span/> : <Nav mobile={mobile} first={first}/>}
                <header className="bb b--white-70">
                    <h3 className="tc f-headline-ns f1" style={{fontFamily: "Mak",  color:"#465964"}}>Gallery</h3>
                </header>
                <div>
                    <Link to={first?"/firstTemplate/Gallery/Pictures":"/secondTemplate/Gallery/Pictures"}>
                    <a href="/firstTemplate/Gallery/Pictures" className="grow no-underline dib ml6-ns fl w-100 w-40-ns pa3 ">
                        <img
                            src={imagePort}
                            alt="Portrait"
                        />
                        <div className="mt1 tc baskerville f3" style={{fontFamily:"Mak", color: "#465964"}}>Portraits</div>
                    </a>
                    </Link>
                    <Link to={first?"/firstTemplate/Gallery/AudiosVideos":"/secondTemplate/Gallery/AudiosVideos"}>
                    <a href="/firstTemplate/Gallery/AudiosVideos" className="grow no-underline dib fl w-100 w-40-ns pa3 ">
                        <img
                            src={imageAudiosVids}
                            alt="Scenes"
                        />
                        <div className="mt1 tc baskerville f3" style={{fontFamily:"Mak", color: "#465964"}}>Audios & Videos</div>
                    </a>
                    </Link>
                </div>
            </div>
        )
}

