import React from "react";
import "../componentsCSS/OrderYourWatch.css";
const OrderYourWatch = ({ imageWatchOrder, model }) => {

    return (
        <div className="order-wrapper">
            <div className="order-watch-wrapper" style={{ backgroundImage: `url(${imageWatchOrder})` }}>
                <div className="order-text-wrapper">
                    <p className="order-text">ORDER YOUR WATCH</p>
                    <h3>{model}</h3>
                </div>
            </div>
        </div>
    );
};
export default OrderYourWatch;