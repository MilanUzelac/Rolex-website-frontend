import React from "react";
import "../componentsCSS/WatchFeatures.css";

const WatchFeaturesCard = ({ featuresImage, featuresHead, featuresDesc }) => {

    return (
        <div className="features-wrapper">
            <div className="features-image-wrapper">
                <img src={featuresImage} alt="feature-img"/>
            </div>
            <div className="features-text-wrapper">
                <h3 className="features-h3">{featuresHead}</h3>
                <p className="features-p">{featuresDesc}</p>
            </div>
        </div>
    );

};

export default WatchFeaturesCard;