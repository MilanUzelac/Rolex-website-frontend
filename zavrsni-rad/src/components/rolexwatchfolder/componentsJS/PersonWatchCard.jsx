import React from "react";
import "../componentsCSS/PersonWatchCard.css";

const PersonWatchCard = ({ personImage, personName }) => {

    return (
        <div className="person__big_wrapper">
            <div className="person__image_wrapper">
                <img src={personImage} alt="person-img"/>
            </div>
            <div className="person__text_wrapper">
                <h2>ROGER FEDERER</h2>
            </div>
        </div>
    );

}
export default PersonWatchCard;