import React,{useState} from "react";
import Header from "../../Header.js";
import "../menwatchesCSS/MensWatchesVideo.css";

const WatchesVideo = ({videoLink,text}) => {
    return (
        <div className="man-page">
            <div className="video-mens-wrapper">
            <Header/>
                <div className="video-cover"></div>
                <video className="head-video" loop autoPlay muted>
                    <source src={videoLink} type="video/mp4" />
                </video>
                <p className="mens-text">{text}</p>
                <span className="scroll-down">
                    <svg height="30" width="30" style={{ fill: "white", zIndex: 7 }}>
                        <path d="m30 10.82-15 15.82-15-15.82 3.90-3.90 11.10 11.66 11.10-11.66z"></path>
                    </svg>
                </span>
            </div>
        </div>
    );

}
export default WatchesVideo;