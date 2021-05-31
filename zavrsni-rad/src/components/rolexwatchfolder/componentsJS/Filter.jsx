import React from "react";
import "../componentsCSS/Filter.css";
import FilterGender from "../componentsJS/FilterGender.jsx";
import SearchWatches from "./SearchWatches";

const Filter = () => {
    return (
        <div className="filter__wrapper">
            <div className="filter__wrapper_half">
                <div className="filter__wrapper_half_left">
                    <FilterGender />
                </div>
                <div className="filter__wrapper_half_right">
                    <SearchWatches/>
                </div>
            </div>
        </div>
    );
}
export default Filter;