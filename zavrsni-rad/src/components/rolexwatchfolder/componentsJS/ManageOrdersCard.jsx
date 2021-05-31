import React from "react";
import "../componentsCSS/ManageOrdersCard.css";
import WatchOrderCard from "./WatchOrderCard";
import Button from '@material-ui/core/Button';

const ManageOrdersCard = ({ userName, firstName, lastName, yearOfBirth, address, phoneNumber, email, orderedWatchesDetails, totalprice, chosenCity, estimatedDate }) => {
    return (
        <div className="order__card_wrapper">
            <h2 className="order_user_h1">USER DETAILS</h2>
            <div className="user_card_wrapper">
                <div className="user_card_left">
                    <div className="user_card_key_div">
                        <h2>Username: </h2>
                        <h2>First name:  </h2>
                        <h2>Last name: </h2>
                        <h2>Year of birth: </h2>
                    </div>
                    <div className="user_card_value_div">
                        <h2>{userName}</h2>
                        <h2>{firstName}</h2>
                        <h2>{lastName}</h2>
                        <h2>{yearOfBirth}</h2>
                    </div>
                </div>
                <div className="user_card_right">
                    <div className="user_card_key_div">
                        <h2>Address: </h2>
                        <h2>Phone number:  </h2>
                        <h2>Email: </h2>
                    </div>
                    <div className="user_card_value_div">
                        <h2>{address}</h2>
                        <h2>{phoneNumber}</h2>
                        <h2>{email}</h2>
                    </div>
                </div>
            </div>
            <hr/>
            <h2 className="order_user_h1">ORDERED WATCHES</h2>
            <div className="order_cards_wrapper">
                {
                    Object.values(orderedWatchesDetails).map(watch => (
                        <WatchOrderCard watchModel={watch.model} watchCardImage={watch.imageWatchCard} price={watch.price} />
                    ))
                }
            </div>
            <hr/>
            <div className="order_bill_wrapper">
                <div>
                    <h3 className="order_user_h3"><p></p>TOTAL PRICE: {totalprice} €</h3>
                    <h3 className="order_user_h3">CHOSEN CITY: {chosenCity}</h3>
                    <h3 className="order_user_h3">ESTIMATED DATE: {estimatedDate}</h3>
                </div>
                <div className="button_div">
                    <Button variant="outlined" color="secondary" className="delete__user_btn">
                        Delete order
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default ManageOrdersCard;