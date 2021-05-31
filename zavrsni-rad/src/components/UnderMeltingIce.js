import React from "react";
import "../components/UnderMeltingIce.css";
const UnderMeltingIce = ({ imgUrl, text1, text2 }) => {

    return (
        <div className="under-melting-ice">
            <div className="image-wrap">
                <img src={imgUrl} alt="under-ice-img"/>
            </div>

            <h3>{text1}</h3>
            <p>{text2}</p>
            <p>Discover more</p>

        </div>
    );

};
export default UnderMeltingIce;