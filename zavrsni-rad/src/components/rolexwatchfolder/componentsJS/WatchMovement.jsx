import React from "react";
import "../componentsCSS/WatchModelCase.css";
const WatchMovement = ({ movementImage, movement, calibre, precision, functions, oscilator, winding, powerReserve }) => {

    return (
        <div className="model-case-big-wrapper">
            <p className="model-case-head">MOVEMENT</p>
            <img src={movementImage} alt="watch-movement-img"/>
            <p className="model-case-prop">MOVEMENT</p>
            <p className="model-case-p">{movement}</p>
            <p className="model-case-prop">CALIBRE</p>
            <p className="model-case-p">{calibre}</p>
            <p className="model-case-prop">PRECISION</p>
            <p className="model-case-p">{precision}</p>
            <p className="model-case-prop">FUNCTIONS</p>
            <p className="model-case-p">{functions}</p>
            <p className="model-case-prop">OSCILLATOR</p>
            <p className="model-case-p">{oscilator}</p>
            <p className="model-case-prop">WINDING</p>
            <p className="model-case-p">{winding}</p>
            <p className="model-case-prop">POWER RESERVE</p>
            <p className="model-case-p">{powerReserve}</p>
        </div>
    );

};
export default WatchMovement;