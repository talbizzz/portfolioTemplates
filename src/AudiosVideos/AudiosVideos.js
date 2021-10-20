import React, {useEffect, useState} from 'react';
import audioMondnacht from '../Pictures/Mondnacht (Schumann).m4a';
import audioWilkommen from '../Pictures/Willkommen und Abschied.m4a';
import ReactPlayer from "react-player";
import PrevButton from '../Button/Button'

const AudiosVideos = ({match, mobile}) => {

    const [first, setFirst] = useState(false);
    useEffect(() => {
        if (match.path === "/FirstTemplate") {
            setFirst(true)
        } else {
            setFirst(false)
        }
        console.log(first)
    }, [])

    return (
        <div>
            <div className="flex pa4">
                <PrevButton
                    href={
                        first ?
                            "/portfolioTemplates/firstTemplate/Gallery" :
                            "/portfolioTemplates/SecondTemplate/Gallery"
                    }
                    path={"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"}/>
            </div>
            <div className="w-100 fl mt2 center">
                <div className="w-third-ns w-100 fl pa3 ">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ASJDB1KiLUc' width={'auto'} height={'auto'}
                                 playing={false}/>
                </div>
                <div className="w-third-ns w-100 fl pa3">
                    <ReactPlayer url='https://www.youtube.com/watch?v=GrlXQ8miP_I&authuser=0' width={'auto'}
                                 height={'auto'} playing={false}/>
                </div>
                <div className="w-third-ns w-100 fl pa3">
                    <ReactPlayer url='https://www.youtube.com/watch?v=uvaNPx_SyaE&authuser=0' width={'auto'}
                                 height={'auto'} playing={false}/>
                </div>
            </div>
            <div className={"w-100 fl"}>
                <div className="tc w-50-ns pt4 ph4 fl w-100">
                    <div className={"pv1"}>
                        <audio controls>
                            <source src={audioMondnacht} type="audio/mpeg"/>
                        </audio>
                    </div>
                    <div className={"baskerville fl w-100 "}>R.Schumann- Mondnacht</div>
                </div>
                <div className="tc w-50-ns pt4 ph4 fl w-100">
                    <div className={"pv1"}>
                        <audio controls>
                            <source src={audioWilkommen} type="audio/mpeg"/>
                        </audio>
                    </div>
                    <div className={"baskerville fl w-100 "}>F.Schubert- Willkommen und Abschied</div>
                </div>
            </div>
        </div>
    );
}

export default AudiosVideos