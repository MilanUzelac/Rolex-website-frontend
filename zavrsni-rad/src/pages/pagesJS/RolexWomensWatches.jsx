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


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://rolexwebsite.com/api/watches/public/getwomanswatch');
            setData(result.data);
        };
        fetchData();
    }, []);

    useMemo(() => {
        Object.values(data).map((item) => (
            watchesFooter.push(item.model)
        ))
    }, [])


    console.log(watchesFooter)

    return (
        <div className="mens-watches">
            <WatchesVideo text="WOMEN'S WATCHES" videoLink={"http://rolexwebsite.com/api/watches/images/staticfiles/classic-watches-lady-datejust-cover-video.mp4"} />
            <div className="mens-watches-big-wrapper">
                {
                    Object.values(data).map((item, key) => (
                        <MenWatchCard key={key} watchModel={item.model} watchCardImage={item.imageWatchCard} watchHead={item.model} watchDesc={item.desc} />
                    ))
                }
            </div>
            <YouMayAlsoLike mayLikeWatches={data} />
            <Footer />
        </div>
    );
}

export default RolexMensWatches;