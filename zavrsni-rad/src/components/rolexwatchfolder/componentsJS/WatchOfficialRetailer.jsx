import React from "react";
import "../componentsCSS/WatchOfficialRetailer.css";

const WatchOfficialRetailer = ({rolexBoxImage}) => {

    return (
        <div className="rolex-watch-retailer-wrapper">
            <div className="rolex-from-box-wrapper" >
                <img src={rolexBoxImage} alt="box-img"/>
            </div>
            <div className="rolex-visit-retailer-div">
                <div className="retailer-text-wrapper">
                    <h1 className="retailer-head">VISIT AN OFFICIAL RETAILER TO<br/>EXPERIENCE A ROLEX</h1>
                    <p className="retailer-p">The Rolex Collection features both Classic and Professional watches available in a variety of materials, dials, bracelets and sizes to suit all wrists and styles.</p>
                </div>
            </div>
        </div>
    );

};
export default WatchOfficialRetailer;