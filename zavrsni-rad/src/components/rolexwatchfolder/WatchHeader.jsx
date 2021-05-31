import React from "react";
import "./WatchHeader.css";

const WatchHeader = ({ rolexLogo }) => {

    return (

        <div className="nav-full-wrapper">
            <div className="left-nav">
                <ul className="nav-ul">
                    <li>WATCHES</li>
                    <li>WORLD OF ROLEX</li>
                </ul>
            </div>
            <div className="center-nav">
                <div className="logo-rolex-div">
                    <img src={rolexLogo} />
                </div>
            </div>
            <div className="right-nav">
                <ul className="nav-ul">
                    <li>EVERY ROLEX TELLS A STORY</li>
                    <li>LOG IN</li>
                </ul>
            </div>

        </div>


    );

};
export default WatchHeader;