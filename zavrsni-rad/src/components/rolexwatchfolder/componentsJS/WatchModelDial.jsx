import React from "react";
import "../componentsCSS/WatchModelDial.css";

const WatchModelDial = ({dialImage,modelDial,modelDialDetails}) => {

    return (
        
        <div className="model-dial-wrapper">
            <p className="model-dial-head">MODEL DIAL</p>
            <img src={dialImage} alt="model-dial-img" />
            <p className="model-dial-prop">DIAL</p>
            <p className="model-dial-p">{modelDial}</p>
            <p className="model-dial-prop">DETAILS</p>
            <p className="model-dial-p">{modelDialDetails}</p>

        </div>
    );

};

export default WatchModelDial;