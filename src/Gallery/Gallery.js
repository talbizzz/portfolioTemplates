import React, {useEffect, useState} from "react"
import imagePort from "../Pictures/imagePort.jpeg"
import imageAudiosVids from "../Pictures/imageAudiosVids.jpeg"
import {useHistory} from "react-router-dom";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import {TouchableOpacity} from "react-native-web";
import {portraits} from "../Pictures/Portraits";


export default function Gallery({match, mobile}) {
    const [first, setFirst] = useState(false);
    useEffect(() => {
        if (match.path === "/FirstTemplate") {
            setFirst(true)
        } else {
            setFirst(false)
        }
        console.log(first)
    }, [])


    const history = useHistory();

    const width = window.innerWidth
    const height = window.innerHeight

    const onPress = (portraits) => {
        if (portraits)
            history.push(
                first ?
                    "/portfolioTemplates/firstTemplate/Gallery/Pictures" :
                    "/portfolioTemplates/secondTemplate/Gallery/Pictures"
            )
        else
            history.push(
                first ?
                    "/portfolioTemplates/firstTemplate/Gallery/AudiosVideos" :
                    "/portfolioTemplates/secondTemplate/Gallery/AudiosVideos"
            )
    }

    const cardWidth = mobile ? width - 20 : width / 3.5
    const cardHeight = height / 3

    return (
        <div>
            {first ?
                <></> :
                <Nav mobile={mobile} first={first}/>}
            <h3 className="f-headline-ns f1 tl-ns tc ml5-ns"
                style={{fontFamily: "Mak", color: "#465964", paddingTop: `${first ? "" : "5%"}`}}>Gallery</h3>
            <div className={"flex"}
                 style={{
                     flexDirection: mobile ? "column" : "row",
                     justifyContent: "center",
                     marginBottom: "10%",
                     alignItems: "center"
                 }}>
                <TouchableOpacity style={{marginRight: mobile?"":"5%"}} onPress={() => onPress(true)}>
                    <Card cardWidth={cardWidth} cardHeight={cardHeight} image={imagePort}>
                        <span className="mt1 tc baskerville f3"
                              style={{fontFamily: "Mak", color: "#fff"}}> Portraits </span>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress(false)}>
                    <Card cardWidth={cardWidth} cardHeight={cardHeight} image={imageAudiosVids}>
                        <span className="mt1 tc baskerville f3" style={{fontFamily: "Mak", color: "#fff"}}>Audios & Videos</span>
                    </Card>
                </TouchableOpacity>
            </div>
        </div>
    )
}

