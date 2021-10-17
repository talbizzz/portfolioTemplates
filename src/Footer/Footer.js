import React from "react";
import SocialNetworks from "./SocialNetworks";

export default function Footer({match, mobile}){
    return(
            <div style={{backgroundColor:"#2C3137", paddingTop:10, paddingBottom:1}}>
                <h1 className={"f1 tc white"} style={{fontFamily: "Mak"}}>Contact</h1>
                <footer style={{width : window.innerWidth}} >
                    <div style={{marginLeft:"2%"}} >
                        <a
                            className=" link white-60 "
                            href="mailto:"
                        >
                            rebeka_stojkoska@yahoo.com
                        </a>
                        <SocialNetworks/>
                    </div>
                    <div>
                        <p style={{textAlign:"right", marginRight:"1%"}}>
                            <a className={" link white-60 f7"} href="https://github.com/talbizzz">
                                © Github | @talbizzz
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
    )
}