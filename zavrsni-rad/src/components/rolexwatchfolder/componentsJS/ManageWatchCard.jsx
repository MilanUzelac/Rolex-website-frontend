import React from "react";
import "../componentsCSS/ManageWatchCard.css"
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import {Link} from "react-router-dom"

const ManageWatchCard = ({ watchModel, watchCardImage }) => {

    return (
        <div className="managewatch_card_wrapper" style={{ position: "relative" }}>
            <div className="managewatch_icons_wrapper">
                <DeleteOutlineTwoToneIcon fontSize="medium" />
            </div>
             <Link to={`/watches/man/${watchModel}`}> 
                <div className="managewatch__container">
                    <img src={watchCardImage} />
                    <h4>{watchModel}</h4>
                </div>
            </Link> 
        </div>
    )
}
export default ManageWatchCard;