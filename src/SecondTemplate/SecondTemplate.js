import React, {useEffect, useState} from 'react';
import background1 from "../Pictures/principalBackground2.png";
import background2 from "../Pictures/principalBackground.jpeg";
import TitleText from "../TitleText/TitleText";

export default function  SecondTemplate({mobile}){

    return (
        <div>
            <TitleText first={false} mobile={mobile}/>
        </div>
    );

}