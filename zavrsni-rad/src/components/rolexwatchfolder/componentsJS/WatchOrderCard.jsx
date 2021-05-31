import React from "react";
import { Link } from "react-router-dom";

const WatchOrderCard = ({ watchModel, watchCardImage, price }) => {
    return (
        <div className="managewatch_card_wrapper" style={{ position: "relative" }}>
            <Link to={`/watches/man/${watchModel}`}>
                <div className="managewatch__container">
                    <img src={watchCardImage} />
                    <h4>{watchModel}</h4>
                    <h4>{price} €</h4>
                </div>
            </Link>
        </div>
    );
}
export default WatchOrderCard;