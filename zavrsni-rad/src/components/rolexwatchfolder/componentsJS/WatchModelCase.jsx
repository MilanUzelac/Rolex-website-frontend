import React from "react";
import "../componentsCSS/WatchModelCase.css";

const WatchModelCase = ({modelCase,caseImage,oysterArchitecture,diameter,material,bezel,windingCrown,crystal,waterResistance}) =>{

    return(
        <div className="model-case-big-wrapper">
            <p className="model-case-head">MODEL CASE</p>
            <img src={caseImage} alt="model-case-img"/>
            <p className="model-case-prop">MODEL CASE</p>
            <p className="model-case-p">{modelCase}</p>
            <p className="model-case-prop">OYSTER ARCHITECTURE</p>
            <p className="model-case-p">{oysterArchitecture}</p>
            <p className="model-case-prop">DIAMETER</p>
            <p className="model-case-p">{diameter}</p>
            <p className="model-case-prop">MATERIAL</p>
            <p className="model-case-p">{material}</p>
            <p className="model-case-prop">BEZEL</p>
            <p className="model-case-p">{bezel}</p>
            <p className="model-case-prop">WINDING CROWN</p>
            <p className="model-case-p">{windingCrown}</p>
            <p className="model-case-prop">CRYSTAL</p>
            <p className="model-case-p">{crystal}</p>
            <p className="model-case-prop">WATER RESISTANCE</p>
            <p className="model-case-p">{waterResistance}</p>
        </div>
    );

}

export default WatchModelCase;