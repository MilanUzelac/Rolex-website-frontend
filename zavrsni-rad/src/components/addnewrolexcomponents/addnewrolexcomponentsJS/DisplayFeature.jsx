import React from "react";

export default props => {
    return(
        <div>
            <h3>Feature head</h3>
            <h4>{props.head}</h4>
            <h3>Feature desc</h3>
            <h4>{props.desc}</h4>
            <button onClick={props.onDelete}>X</button>
        </div>
    );
}