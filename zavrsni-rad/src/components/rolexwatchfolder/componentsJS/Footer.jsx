import React from "react";
import "../componentsCSS/Footer.css";
import FooterContent from "./FooterContent.jsx";

const Footer = () => {

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const liArray = {
        "RolexWatches": ["Rolex watches", "Configure your watch", "Watch finder", "Men's watches", "Women's watches", "History & watchmaking", "Every Rolex Tells a Story"],
        "WorldOfRolex": ["Sports, Arts and Exploration"],
        "Services": ["Find a retailer", "Watch care & service", "Your selection", "Frequently Asked Questions"],
        "OfficialChannels": ["Facebook", "Instagram", "Twitter", "Youtube", "Pinterest", "Linkedin", "Youku", "WeChat", "Weibo"],
        "legalNotices": ["Terms of use", "Privacy Notice", "Cookies"],
        "media": ["Wallpapers", "Brochures", "User guides"]
    };
    
    return (
        <div className="footer-wrapper">
            <div className="footer-content-wrapper">
                <div className="footer-content-left">
                    <FooterContent headContent="ROLEX WATCHES" liContent={liArray.RolexWatches} />
                    <FooterContent headContent="WORLD OF ROLEX" liContent={liArray.WorldOfRolex} />
                </div>
                <div className="footer-content-center">
                    <FooterContent headContent="SERVICES" liContent={liArray.Services} />
                    <FooterContent headContent="LEGAL NOTICES" liContent={liArray.legalNotices} />
                </div>
                <div className="footer-content-right">
                    <FooterContent headContent="OFFICIAL CHANNELS" liContent={liArray.OfficialChannels} />
                    <FooterContent headContent="MEDIA" liContent={liArray.media} />
                </div>
            </div>
            <div className="btn-backTop" onClick={handleBackToTop}>
                <svg height="21" width="21" style={{ fill: "white" }} >
                    <path d="m19.5 16.6-9-9.4-9 9.4-1.4-1.4 10.4-10.8 10.4 10.9z"></path>
                </svg>
            </div>
        </div>
    );
}
export default Footer;