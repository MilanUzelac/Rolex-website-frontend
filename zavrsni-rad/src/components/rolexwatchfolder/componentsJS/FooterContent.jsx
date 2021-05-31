import React from "react";
import "../componentsCSS/FooterContent.css"

const FooterContent = ({ headContent,liContent }) => {
    return (
        <div className="content-wrapper">
            <h4 >{headContent}</h4>
            <ul>
                {
                    Object.values(liContent).map((item,key) => (
                        <li key={key}>{item}</li>
                    ))
                }
            </ul>

        </div>
    );
}
export default FooterContent;