import React from "react";
import "../components/Card.css";
import "aos/dist/aos.css";

const Card = ({ image, model, material }) => {

    return (

        <div className="card-wrapper" data-aos="zoom-in" data-aos-once="false">
            <h2>{model}</h2>
            <div className="img-card-wrap">
                <img src={image} alt="card-wrap-image"/>
            </div>
            <p>{material}</p>
        </div>

    );
};

export default Card;