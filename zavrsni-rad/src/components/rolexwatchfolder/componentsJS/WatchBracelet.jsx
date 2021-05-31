import React from "react";
import "../componentsCSS/WatchModelCase.css";

const WatchBracelet = ({braceletImage,bracelet,braceletMaterial,clasp}) => {
    
    return(
        <div className="model-case-big-wrapper">
            <p className="model-case-head">BRACELET</p>
            <img src={braceletImage} alt="bracelet-img" />
            <p className="model-case-prop">BRACELET</p>
            <p className="model-case-p">{bracelet}</p>
            <p className="model-case-prop">BRACELET MATERIAL</p>
            <p className="model-case-p">{braceletMaterial}</p>
            <p className="model-case-prop">CLASP</p>
            <p className="model-case-p">{clasp}</p>
        </div>
    );

};
export default WatchBracelet;