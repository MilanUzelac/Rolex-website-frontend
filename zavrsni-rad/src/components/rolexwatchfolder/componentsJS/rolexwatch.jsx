import React from "react";
import "../componentsCSS/rolexwatch.css";
import Header from "../../Header.js";
import { useReducer, useState } from "react";
import HeaderChangeContext from "./HeaderChangeContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "daymode":
            return {
                bgColor: "transparent",
                transitionDur: "1.5s",
                watchImageOpacity: "1",
                nightWatchImageZindex: "0.2",
                nightSaturation: "saturate(0)",
                spanDayColor: "goldenrod",
                spanNightColor: "white",

            };
        case "nightmode":
            return {
                bgColor: "rgba(0, 0, 0, 0.94)",
                transitionDur: "1.5s",
                watchImageOpacity: "0.06",
                watchImageZindex: "0.2",
                nightWatchImageZindex: "1",
                nightSaturation: "saturate(6)",
                spanDayColor: "white",
                spanNightColor: "goldenrod",
            }

    }
}

const RolexWatch = ({ imageBackground, nightImage, imageWatch, type, model, desc, price }) => {
    
    const [state, dispatch] = useReducer(reducer,0);
    const [isDay, setIsDay] = useState(true);

    return (
        <div className="head-wrapper" style={{ backgroundImage: isDay ? `url(${imageBackground}` : "none", backgroundColor: state.bgColor, transitionDuration: state.transitionDur }}>
            <HeaderChangeContext.Provider value={!isDay}>
                <Header />
                <div className="watch-daynight-wrapper">
                    <img className="watchImage" alt="watch-img" src={imageWatch} style={{ opacity: state.watchImageOpacity, zIndex: state.watchImageZindex, transitionDuration: state.transitionDur }} />
                    <img className="night-watchImage" alt="night-watch-img" src={nightImage} style={{ zIndex: state.nightWatchImageZindex, transitionDuration: state.transDuration, filter: state.nightSaturation }} />
                </div>
                <div className="rolex-short-desc-wrapper">
                    <p className="rolex-short-desc">{type}</p>
                    <h1 className="rolox-short-desc">{model}</h1>
                    <p className="rolex-short-desc">{desc}</p>
                    <p className="rolex-short-desc">{price}</p>
                </div>
                <p className="day-night-span"><span className="span-day" onClick={(e) => { e.preventDefault(); setIsDay(true); dispatch({ type: 'daymode' }); }} style={{ color: state.spanDayColor }}>{"Day <<-"}</span><span className="dash-span">-</span><span className="span-night" onClick={(e) => { e.preventDefault(); setIsDay(false); dispatch({ type: 'nightmode' }) }} style={{ color: state.spanNightColor }}>{"->> Night"}</span></p>
            </HeaderChangeContext.Provider>
        </div>
    );

};
export default RolexWatch;