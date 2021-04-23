import React from "react"
import imagePort from "../Pictures/imagePort.jpeg"
import imageAudiosVids from "../Pictures/imageAudiosVids.jpeg"
import {Link} from "react-router-dom";


export default function Gallery(){
        return(
            <div className={"mb5"}>
                <header className="bb b--white-70">
                    <h3 className="tc f-headline-ns f1" style={{fontFamily: "Mak",  color:"#465964"}}>Gallery</h3>
                </header>
                <div>
                    <Link to={"/firstTemplate/Gallery/Pictures"}>
                    <a href="/firstTemplate/Gallery/Pictures" className="grow no-underline dib ml6-ns fl w-100 w-40-ns pa3 mr2">
                        <img
                            src={imagePort}
                            alt="Portrait"
                        />
                        <div className="mt1 tc baskerville f3" style={{fontFamily:"Mak", color: "#465964"}}>Portraits</div>
                    </a>
                    </Link>
                    <Link to={"/firstTemplate/Gallery/AudiosVideos"}>
                    <a href="/firstTemplate/Gallery/AudiosVideos" className="grow no-underline dib fl w-100 w-40-ns pa3 mr2">
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

