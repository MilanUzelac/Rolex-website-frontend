import React from "react";
import "../menwatchesCSS/MenWatchCard.css";
import { Link } from "react-router-dom";

const MenWatchCard = ({ watchModel,watchCardImage, watchHead, watchDesc }) => {

    return (
        <Link to={`/watches/man/${watchModel}`} >
            <div className="man-watch-card">
                <div className="man-watch-image-wrapper">
                    <img src={watchCardImage} alt="watch-card-img"/>
                </div>
                <p className="man-watch-head">{watchHead}</p>
                <p className="man-watch-desc">{watchDesc}</p>
            </div>
        </Link>
    );

}
export default MenWatchCard;