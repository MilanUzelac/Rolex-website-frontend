import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import SecondHeader from "../../components/rolexwatchfolder/componentsJS/SecondHeader";
import "../pagesCSS/ManageOrders.css";
import OrderFilter from "../../components/rolexwatchfolder/componentsJS/OrderFilter";
import ManageOrdersCard from "../../components/rolexwatchfolder/componentsJS/ManageOrdersCard";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer";
import FilterOrdersContext from "../../components/contextApis/FilterOrdersContext";

const ManageOrders = () => {
    const [data, setData] = useState([])
    const [searchOrder, setSearchOrder] = useState("");


    useEffect(() => {
        axios.get("http://rolexwebsite.com/api/order/admin/getallorders", {
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("jwt")
            }
        }).then((response) => {
            setData(response.data)
        }, error => {
            console.log(error)
        })
    }, [])


    const searchOrders = useMemo(
        () =>
            data.filter((d) => {
                return d.userNameOrder.toString().toLowerCase().includes(searchOrder.toString().toLowerCase());
            }),
        [searchOrder]
    );


    console.log("searching orders...")
    console.log(searchOrders)

    return (
        <div className="manageorders">
            <SecondHeader manage={"MANAGE ORDERS"} />
            <div className="manage__orders_wrapper">
                <FilterOrdersContext.Provider value={[searchOrder, setSearchOrder]}>
                    <OrderFilter />
                </FilterOrdersContext.Provider>
                <div className="manage__orders_card_wrapper">
                    {
                        Object.values(searchOrder == "" ? data : searchOrders).map(usr => (
                            <ManageOrdersCard key={usr.userNameOrder} userName={usr.user.userName} firstName={usr.user.firstName} lastName={usr.user.lastName} yearOfBirth={usr.user.yearOfBirth} address={usr.user.address} phoneNumber={usr.user.phoneNumber} email={usr.user.email} orderedWatchesDetails={usr.orderedWatchesDetails} totalprice={usr.finalPrice} chosenCity={usr.chosenCity} estimatedDate={usr.estimatedDate} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ManageOrders;