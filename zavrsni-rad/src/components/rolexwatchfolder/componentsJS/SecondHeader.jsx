import React from "react";
import Header from "../../Header";
import "../componentsCSS/SecondHeader.css";

const SecondHeader = ({manage}) => {
    return(
        <div>
            <Header/>
            <div className="managewatches_backround">
                <h1 style={{color:"white"}}>{manage}</h1>
            </div>
        </div>
    );
}
export default SecondHeader;