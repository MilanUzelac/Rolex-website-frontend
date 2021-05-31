import React, { useState, useEffect, useMemo, useContext } from "react";
import Header from "../../components/Header";
import "../pagesCSS/AdminPage.css";
import axios from "axios";
import {Link} from "react-router-dom";


const AdminPage = () => {

    const [data, setData] = useState([]);
    const [watchesFooter, setWatchesFooter] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios('http://rolexwebsite.com/api/watches/public/getmanswatch');
            setData(result.data);
        };
        fetchData();
    }, []);

    useMemo(() => {
        Object.values(data).map((item) => (
            watchesFooter.push(item.model)
        ))
    }, [])
    const [backgroundLogin] = useState("http://rolexwebsite.com/api/watches/images/air-king/airkingBackground.jpg");
    return (
        <div>

            <Header />
            <div className="adminpage__image_wrapper">
                <img src={backgroundLogin} />
            </div>
            <div className="adminpage__wrapper">
                <div className="adminpage__content_wrapper">
                    <h1>ADMIN PANEL</h1>
                    <ul>
                        <Link to="/admin/managewatches" className="admin__manage_link"><li>MANAGE WATCHES</li></Link>
                        <Link to="/admin/manageusers" className="admin__manage_link"><li>MANAGE USERS</li></Link>
                        <Link to="/admin/manageorders" className="admin__manage_link"><li>MANAGE ORDERS</li></Link>
                    </ul>
                </div>
            </div>




        </div>
    )
}
export default AdminPage;