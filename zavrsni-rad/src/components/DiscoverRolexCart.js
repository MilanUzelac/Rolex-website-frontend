import React from "react";
import "../components/DiscoverRolexCart.css";

const DiscoverRolexCart = ({ image, text, text2 }) => {
    return (
        <div className="discoverRolexWrapper">
            <div className="image-wrap">
                <img src={image} alt="discover-rolex-img"/>
            </div>
            <h3>{text}</h3>
            <p>{text2}</p>
            <p>Discover more</p>
        </div>
    );
};

export default DiscoverRolexCart;