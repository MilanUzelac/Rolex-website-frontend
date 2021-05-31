import React, { useState, useEffect, useMemo } from "react";
import SecondHeader from "../../components/rolexwatchfolder/componentsJS/SecondHeader";
import UsersFilter from "../../components/rolexwatchfolder/componentsJS/UsersFilter";
import "../pagesCSS/ManageUsers.css";
import axios from "axios";
import UserCard from "../../components/rolexwatchfolder/componentsJS/UserCard";
import FilterUsersContext from "../../components/contextApis/FilterUsersContext";
import { Redirect } from "react-router";
import Footer from "../../components/rolexwatchfolder/componentsJS/Footer";

const ManageUsers = () => {
    const [data, setData] = useState([])
    const [searchedUser, setSearchedUser] = useState("");

    useEffect(() => {
        axios.get('http://rolexwebsite.com/api/users/admin/getAllUsers', {
            headers: { "Authorization": localStorage.getItem("jwt") }
        })
            .then((response) => {
                setData(response.data)
            }, (error) => {
                console.log(error);
            });

    }, []);

    const searchUserResult = useMemo(
        () =>
            data.filter((d) => {
                console.log("filtering users");
                return d.userName.toString().toLowerCase().includes(searchedUser.toString().toLowerCase()) || d.firstName.toString().toLowerCase().includes(searchedUser.toString().toLowerCase());
            }),
        [searchedUser]
    );

    if (localStorage.getItem("role") === "ADMIN") {
        return (
            <div>
                <SecondHeader manage="MANAGE USERS" />
                <div className="manage__users_wrapper">
                    <FilterUsersContext.Provider value={[setSearchedUser]}>
                        <UsersFilter />
                    </FilterUsersContext.Provider>
                    <div className="manage__users_card_wrapper">
                        {
                            Object.values(searchedUser == "" ? data : searchUserResult).map((user, idx) => (
                                <UserCard key={idx} userName={user.userName} firstName={user.firstName} lastName={user.lastName} yearOfBirth={user.yearOfBirth} address={user.address} phoneNumber={user.phoneNumber} email={user.email} />
                            ))
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    } else {
        return <Redirect to="/" />
    }
}
export default ManageUsers;