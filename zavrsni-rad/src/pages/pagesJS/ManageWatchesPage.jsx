import React, { useState, useEffect, useMemo } from "react";
import SecondHeader from "../../components/rolexwatchfolder/componentsJS/SecondHeader";
import "../pagesCSS/ManageWatchesPage.css";
import axios from "axios";
import ManageWatchCard from "../../components/rolexwatchfolder/componentsJS/ManageWatchCard"
import AddNewWatchCard from "../../components/rolexwatchfolder/componentsJS/AddNewWatchCard"
import Filter from "../../components/rolexwatchfolder/componentsJS/Filter";
import FilterContext from "../../components/contextApis/FilterContext";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer"
import { Redirect } from "react-router";

const ManageWatchesPage = () => {

    const [data, setData] = useState([]);
    const [genderCheck, setGenderCheck] = useState("allgenders")
    const [searchModel, setSearchModel] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://rolexwebsite.com/api/watches/public/getallwatches');
            setData(result.data);
        };
        fetchData();
    }, []);

    const filteredMale = React.useMemo(
        () =>
            data.filter((d) => {
                console.log('Filter function is running ...');
                return d.gender == "Male";
            }),
    );

    const filteredFemale = React.useMemo(
        () =>
            data.filter((d) => {
                console.log('Filter function is running ...');
                return d.gender == "Female";
            }),
    );


    const searchWatchResult = useMemo(
        () =>
            data.filter((d) => {
                return d.watchModel.toString().toLowerCase().includes(searchModel.toString().toLowerCase());
            }),
        [searchModel]
    );

    console.log(searchWatchResult)
    console.log(searchModel)

    if (localStorage.getItem("role") === "ADMIN") {
        return (
            <div className="managewatches">
                <SecondHeader manage={"MANAGE WATCHES"} />
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <FilterContext.Provider value={[setGenderCheck, setSearchModel]}>
                        <Filter />
                    </FilterContext.Provider>
                    <div className="managewatches__card_wrapper">
                        <AddNewWatchCard />
                        {
                            Object.values(searchModel == "" ? (genderCheck == "allgenders" ? data : (genderCheck == "Male" ? filteredMale : filteredFemale)) : searchWatchResult).map((item, key) => (
                                <ManageWatchCard key={key} watchModel={item.watchModel} watchCardImage={item.imageUrl} />
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );

    }


}
export default ManageWatchesPage