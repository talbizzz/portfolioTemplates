import React, {useEffect, useState} from 'react';
import OpenableImage from '../OpenableImage/OpenableImage'
import {portraits} from '../Pictures/Portraits'
import PrevButton from "../Button/Button";

const Images = ({match, mobile}) => {
    const [first, setFirst] = useState(false);
    useEffect(() => {
        if (match.path === "/FirstTemplate") {
            setFirst(true)
        } else {
            setFirst(false)
        }
        console.log(first)
    }, [])

    const [size, setSize]= useState(1);
    useEffect(() => {
        console.log("window:"+window.innerWidth)
        if(window.innerWidth>600){
            setSize(0)
        }else{
            setSize(1)
        }
    },)

    return (
        <div>
            {
                 size===0?
                    <div>
                        <div className="flex pa4">
                            <PrevButton href={first ? "/firstTemplate/Gallery/" : "/secondTemplate/Gallery/"}
                                    path={"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"}/>
                        </div>
                        <div className="mt2 flex">
                            <div className="w-50  "><OpenableImage image={portraits[1].url}
                                                                   caption={portraits[0].caption}/></div>
                            <div className="w-50  "><OpenableImage image={portraits[0].url}
                                                                   caption={portraits[0].caption}/></div>
                        </div>
                        <div className="flex">
                            <div className="w-25  "><OpenableImage image={portraits[7].url}
                                                                   caption={portraits[0].caption}/></div>
                            <div className="w-25  "><OpenableImage image={portraits[3].url}
                                                                   caption={portraits[0].caption}/></div>
                            <div className="w-25  "><OpenableImage image={portraits[2].url}
                                                                   caption={portraits[0].caption}/></div>
                            <div className="w-25  "><OpenableImage image={portraits[6].url}
                                                                   caption={portraits[0].caption}/></div>
                        </div>
                        <div className="flex">
                            <div className="w-50  "><OpenableImage image={portraits[5].url}
                                                                   caption={portraits[0].caption}/></div>
                            <div className="w-50  "><OpenableImage image={portraits[4].url}
                                                                   caption={portraits[0].caption}/></div>
                        </div>
                    </div> :
                    <div>
                        <div className="flex pa2">
                            <PrevButton href={first ? "/firstTemplate/Gallery" : "/secondTemplate/Gallery"}
                                        path={"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"}/>
                        </div>
                        {
                            portraits.map(image => {
                                return (
                                    <OpenableImage image={image.url} caption={image.caption}/>
                                )
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Images;
