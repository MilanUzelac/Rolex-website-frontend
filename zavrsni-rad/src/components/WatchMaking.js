import React from "react";
import "../components/WatchMaking.css";
import "aos/dist/aos.css";

const WatchMaking = ({ videoWatchMaking, text1, text2, text3 }) => {
    return (
        <div className="watchmaking__wrapper">
            <div className="watchmaking__video_div">
                <video className="watchmaking__video" loop autoPlay muted>
                    <source src={videoWatchMaking} type="video/mp4" />
                     Your browser does not support HTML5 video.
                     </video>
            </div>
            <div className="watchmaking__wrapper_div">
                <div className="watchmaking__text_wrapper">
                    <p data-aos="fade-left" data-aos-once="true">{text1}</p>
                    <h2 data-aos="fade-left" data-aos-once="true" >{text2}</h2>
                    <p data-aos="fade-left" data-aos-once="true">{text3}</p>
                </div>
            </div>
        </div>

    );
};
export default WatchMaking;

