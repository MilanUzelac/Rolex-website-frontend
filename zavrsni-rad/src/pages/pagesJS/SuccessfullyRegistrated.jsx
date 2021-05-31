import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const SuccessfullyRegistered = () => {
    const [backgroundLogin] = useState("http://rolexwebsite.com/api/watches/images/air-king/airkingBackground.jpg");
    return (
        <div>
            <Header />
            <div className="login__image_wrapper" style={{ display: "grid", placeItems: "center" }}>
                <img src={backgroundLogin} alt="background-registration-img"/>
            </div>
            <div style={{ position: "absolute", top: "0px", width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
                <div style={{ width: "100%", height: "15%", display: "grid", placeItems: "center" }}>
                    <h1>You have been successfully registered.</h1>
                    <Link to="/login">
                        <button style={{ color: "green" }}>Back to login page</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SuccessfullyRegistered;