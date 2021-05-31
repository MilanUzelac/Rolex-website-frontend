import React from "react";
import "../componentsCSS/WatchModelCertification.css";

const WatchModelCertification = ({certificationImage,certification}) => {

    return (
        
        <div className="model-certification-wrapper">
            <p className="model-certification-head">CERTIFICATION</p>
            <img src={certificationImage} alt="certification-img" />
            <p className="model-certification-prop">CERTIFICATON</p>
            <p className="model-certification-p">{certification}</p>
        </div>
    );

};

export default WatchModelCertification;