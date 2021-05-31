import React from "react";
import "../componentsCSS/SocialNetworks.css";
import {SocialMediaIconsReact} from "social-media-icons-react";

const SocialNetwork = () =>{

    return(

        <div className="social-network-wrapper">
            <div className="social-network-text">
                <p className="share-this-page">SHARE THIS PAGE</p>
                <ul className="ul-social">
                    <li className="li-social">
                        <SocialMediaIconsReact icon="twitter" url="www.twitter.com"/>
                    </li>
                    <li className="li-social">
                        <SocialMediaIconsReact icon="facebook" url="www.facebook.com"/>
                    </li>
                    <li className="li-social">
                        <SocialMediaIconsReact icon="pinterest" url="www.pinterest.com"/>
                    </li>
                    <li className="li-social">
                        <SocialMediaIconsReact icon="instagram" url="www.instagram.com"/>
                    </li>
                </ul>
            </div>
        </div>

    );

};
export default SocialNetwork;