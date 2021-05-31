import React from "react";
import WatchesVideo from "../../components/menwatchesfolder/menwatchesJS/WatchesVideo.jsx";
import "../pagesCSS/RolexMensWatches.css";
import MenWatchCard from "../../components/menwatchesfolder/menwatchesJS/MenWatchCard.jsx";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer.jsx";
import YouMayAlsoLike from "../../components/rolexwatchfolder/componentsJS/YouMayAlsoLike.jsx";

const RolexMensWatches = () => {

    const [data, setData] = useState([]);
    const [watchesFooter, setWatchesFooter] = useState([])
    const [sliderWatches,setSliderWatches] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://rolexwebsite.com/api/watches/public/getmanswatch');
            const sliderResult = await axios("http://rolexwebsite.com/api/watches/public/getWatchForSlider");
            setData(result.data);
            setSliderWatches(sliderResult.data)
           
        };
        fetchData();

        
    }, []);

    return (
        <div className="mens-watches">
            <WatchesVideo text="MAN'S WATCHES" videoLink={"http://rolexwebsite.com/api/watches/images/staticfiles/new-submariner-video-cover.webm"} />
            <div className="mens-watches-big-wrapper">
                {
                    Object.values(data).map((item, key) => (
                        <MenWatchCard key={key} watchModel={item.model} watchCardImage={item.imageWatchCard} watchHead={item.model} watchDesc={item.desc} />
                    ))
                }
            </div>
            <YouMayAlsoLike mayLikeWatches={sliderWatches} />
            <Footer />
        </div>

    );

}

export default RolexMensWatches;