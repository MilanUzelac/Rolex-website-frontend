import React from "react";
import "../componentsCSS/UserCard.css";
import Button from '@material-ui/core/Button';

const UserCard = ({ userName, firstName, lastName, yearOfBirth, address, phoneNumber, email }) => {
    return (
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
                    <Button variant="outlined" color="secondary" className="delete__user_btn">
                        Delete user
                    </Button>
                </div>
               
               
            </div>
         
        </div>
    );
}
export default UserCard;