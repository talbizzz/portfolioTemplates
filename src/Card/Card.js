import React from "react";
import {ImageBackground} from "react-native-web";


export default (props) => {
    return(
        <ImageBackground
            source={props.image} resizeMode="stretch"
            className="flex"
            blurRadius={5}
            imageStyle={{borderRadius: 10}}
            style={{
                width: props.cardWidth,
                height: props.cardHeight,
                borderRadius: 10,
                boxShadow: "1px 1px 1px #9E9E9E",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
            }}
        >
            <div className={"flex"}
                 style={{
                     flexDirection: "column",
                     justifyContent: "space-around",
                     alignItems: "center",
                     backgroundColor: "rgba(0,0,0,0.3)",
                     width: props.cardWidth,
                     height: props.cardHeight,
                     borderRadius: 10
                 }}>
                {props.children}
            </div>
        </ImageBackground>
    )
}