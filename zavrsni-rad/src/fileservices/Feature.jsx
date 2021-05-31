import React from "react";

export default props => (
    <div>
        <h4>Head feature: {props.head}</h4>
        <h4>Head feature: {props.desc}</h4>
        <h4>Image of feature: {props.image}</h4>
        
        <button onClick={props.onDelete}>x</button>
    </div>
);