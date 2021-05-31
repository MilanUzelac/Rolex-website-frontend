import React from "react";
import "../componentsCSS/WatchTextDescription.css";
const WatchTextDescription = ({firstDesc,secondDesc}) => {

    return (
        <div className="short-text-wrapper">
            <h1 className="short-text-wrapper-h1">{firstDesc}</h1>
            <p className="short-text-wrapper-p">{secondDesc}</p>
        </div>
    );
};

export default WatchTextDescription;