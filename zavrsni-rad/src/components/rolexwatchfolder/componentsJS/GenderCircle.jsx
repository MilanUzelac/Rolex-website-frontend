import React, { useContext } from "react";
import FilterContext from "../../contextApis/FilterContext";
import "../componentsCSS/GenderCircle.css";

const GenderCircle = ({gender,genderString}) => {
    const [setChangeGender] = useContext(FilterContext)
    return(
        
        <div className="gender__circle_wrapper" onClick={() => setChangeGender(genderString)}>
            <img src={gender}/>
            <p>{genderString}</p>
        </div>
    );

}
export default GenderCircle;