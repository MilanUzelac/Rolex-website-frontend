import React from "react";
import GenderCircle from "./GenderCircle";
import "../componentsCSS/FilterGender.css"

const FilterGender = () => {
    return(
        <div className="circle_gender_wrapper" >
            <GenderCircle gender="http://rolexwebsite.com/man.webp" genderString="Male"/>
            <GenderCircle gender="http://rolexwebsite.com/woman.webp" genderString="Female"/>
        </div>
    );
}
export default FilterGender;