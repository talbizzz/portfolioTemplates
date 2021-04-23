import React from 'react';
import OpenableImage from '../OpenableImage/OpenableImage'
import {portraits} from '../Pictures/Portraits'
import Button from '../Button/Button'
const Images = () => {
    return (
        <div>
            <div className="flex pa4">
                <Button path={"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"}/>
            </div>
            <div className="mt2 flex">
                <div className="w-50  "><OpenableImage image={portraits[2].url} caption={portraits[0].caption}/></div>
                <div className="w-50  "><OpenableImage image={portraits[1].url} caption={portraits[0].caption}/></div>
            </div>
            <div className="flex">
                <div className="w-25  "><OpenableImage image={portraits[0].url} caption={portraits[0].caption}/></div>
                <div className="w-25  "><OpenableImage image={portraits[4].url} caption={portraits[0].caption}/></div>
                <div className="w-25  "><OpenableImage image={portraits[3].url} caption={portraits[0].caption}/></div>
                <div className="w-25  "><OpenableImage image={portraits[7].url} caption={portraits[0].caption}/></div>
            </div>
            <div className="flex">
                <div className="w-50  "><OpenableImage image={portraits[6].url} caption={portraits[0].caption}/></div>
                <div className="w-50  "><OpenableImage image={portraits[5].url} caption={portraits[0].caption}/></div>
            </div>
        </div>
    );
}

export default Images