import React, { useState} from "react";
import axios from "axios";


const NotFoundPage = () => {
    const orderedWatchesList = ["SKY-DWELLER", "SEA-DWELLER"]
    const [order, setOrder] = useState({
        orderedWatchesList: orderedWatchesList,
        deliveryCity: "Zurich",
        deliveryDate: new Date(),
        data: new FormData()
    })



    const getWatches = e => {
        e.preventDefault();
        axios({
            method: 'get',
            url: 'http://rolexwebsite.com/api/order/getOrders',
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(function (response) {
                //handle success
                console.log("Uploaded...");
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }


    const newOrder = (e) => {
        e.preventDefault()
        order.data.append('orderedWatchesList', order.orderedWatchesList)
            order.data.append('deliveryCity', order.deliveryCity)
            order.data.append('deliveryDate', order.deliveryDate)

        console.log(order.orderedWatchesList)
        console.log(order.deliveryCity)
        console.log(order.deliveryDate)
        axios({
            method: 'post',
            url: 'http://rolexwebsite.com/api/order/makeNewOrder',
            data: order.data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(function (response) {
                //handle success
                console.log("Uploaded...");
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }




    return (
        <div>
            <h3>404 Not found</h3>
            <button onClick={newOrder}>Order</button>
            <button onClick={getWatches}>Bring me back my watches bitch!</button>
        </div>
    );
}
export default NotFoundPage;