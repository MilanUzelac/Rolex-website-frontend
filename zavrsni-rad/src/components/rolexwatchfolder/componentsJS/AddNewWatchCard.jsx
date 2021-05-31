import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "../componentsCSS/AddNewWatchCard.css"
import { Link } from "react-router-dom";

const AddNewWatchCard = () => {
    return (
        <Link to="/admin/addnewwatch" style={{color:"black"}}>
            <div className="add_new_watch">
                <AddCircleOutlineIcon fontSize="large" color="black"/>
            </div>
        </Link>
    );
}
export default AddNewWatchCard;