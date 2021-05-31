import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RolexWatch from "../components/rolexwatchfolder/componentsJS/rolexwatch.jsx";
import WatchTextDescription from "../components/rolexwatchfolder/componentsJS/WatchTextDescription.jsx";
import WatchFeaturesCard from "../components/rolexwatchfolder/componentsJS/WatchFeaturesCard.jsx";
import "../components/rolexwatchfolder/componentsCSS/WatchFeatures.css";
import "./pagesCSS/RolexWatchPage.css";
import "../components/rolexwatchfolder/componentsJS/WatchModelCase.jsx";
import WatchSpecificationWrap from "../components/rolexwatchfolder/componentsJS/WatchSpecificationsWrap.jsx";
import WatchOfficialRetailer from "../components/rolexwatchfolder/componentsJS/WatchOfficialRetailer.jsx";
import OrderYourWatch from "../components/rolexwatchfolder/componentsJS/OrderYourWatch.jsx";
import SocialNetworks from "../components/rolexwatchfolder/componentsJS/SocialNetworks.jsx";
import Footer from "../components/rolexwatchfolder/componentsJS/Footer.jsx";


const RolexWatchPage = () => {

    const [data, setData] = useState({});
    let { watchModel } = useParams();
    

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = async () => {
            const result = await axios("http://rolexwebsite.com/api/watches/public/getWatchByModel/", {
                params: {
                    watchModelParam: watchModel
                }
            });
            setData(result.data);
        };
        fetchData();
    }, []);

    console.log(data.imageBackground)
    const [staticTextShortAbout, setstaticTextShortAbout] = useState({});
    const [modelCasePom, setmodelCasePom] = useState({});
    const [watchMovementPom, setwatchMovementPom] = useState({});
    const [watchBraceletPom, setwatchBraceletPom] = useState({});
    const [featuresHook, setFeaturesHook] = useState({});
    const [watchDial, setWatchDial] = useState({});
    const [watchCertification, setWatchCertification] = useState({});

    useEffect(() => {
        Object.values(data).map(() => (
            setFeaturesHook(data.watchFeatures),
            setstaticTextShortAbout(data.staticTextShortAbout),
            setmodelCasePom(data.modelCase),
            setwatchBraceletPom(data.watchBracelet),
            setwatchMovementPom(data.watchMovement),
            setWatchDial(data.watchDial),
            setWatchCertification(data.watchCertification)
        ));
    })



    return (
        <div className="rolex-watch">

            <RolexWatch imageBackground={data.imageBackground} nightImage={data.nightImage} imageWatch={data.imageWatch} type={data.watchType} model={data.model} desc={data.desc} price={data.strPrice} />

            <WatchTextDescription firstDesc={staticTextShortAbout.firstDesc} secondDesc={staticTextShortAbout.secondDesc} />
            <h4>Model features</h4>
            <div className="features-big-wrapper">
                {
                    Object.values(featuresHook).map((item,key) => (
                        <WatchFeaturesCard key={key} featuresImage={item.imageUrl} featuresHead={item.headFeature} featuresDesc={item.textFeature} />
                    ))
                }
            </div>

            <WatchOfficialRetailer rolexBoxImage={data.rolexBoxImage} />
            <h3 className="header-technical">MORE {data.model}<br />TECHNICAL DETAILS</h3>
            
            <WatchSpecificationWrap watchCaseProp={modelCasePom} watchMovementProp={watchMovementPom} watchBraceletProp={watchBraceletPom} dialProp={watchDial} certificationProp={watchCertification} />
            <OrderYourWatch imageWatchOrder={data.orderBackgroundImage} model={data.model} />
            <SocialNetworks />
            <Footer/>
        </div>

    );
};

export default RolexWatchPage;