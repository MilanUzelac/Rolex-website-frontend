import React, { useEffect, useState } from "react";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer";
import SecondHeader from "../../components/rolexwatchfolder/componentsJS/SecondHeader";
import "../pagesCSS/UserCartPage.css";
import axios from "axios";
import WatchOrderCard from "../../components/rolexwatchfolder/componentsJS/WatchOrderCard";

const UserCartPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://rolexwebsite.com/api/order/user/getOrders", {
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


    return (
        <div>
            <SecondHeader manage={localStorage.getItem("userName") + " CART"} />
            <div className="user__cart_wrapper">
                <div className="user__watches_cart">
                    <h3>CART DETAILS</h3>
                    <hr />
                    <div className="order_cards_wrapper">
                        {
                            Object.values(data).map(watch => (
                                <WatchOrderCard watchModel={watch.model} watchCardImage={watch.imageWatchCard} price={watch.price} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default UserCartPage;