import React from "react";
import SocialNetworks from "./SocialNetworks";

export default function Footer({match, mobile}){
    return(
        !mobile?
            <footer className="mt6 pa5 ph3 ph5-m ph6-l mid-gray" style={{backgroundColor:"#2C3137"}}>
                <small className=" f6 db tl fl w-50">© Github | @talbizzz</small>
                <a
                    className="db link dim dib white-60 fl w-50 tr"
                    href="mailto:"
                >
                    rebeka_stojkoska@yahoo.com
                </a>
            </footer>:
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
                        <p className={"white-60 f7"} style={{textAlign:"right", marginRight:"2%"}}>
                            © Github | @talbizzz
                        </p>
                    </div>
                </footer>
            </div>
    )
}