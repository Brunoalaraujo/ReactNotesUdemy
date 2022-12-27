import "./Card.css"
import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    }

    return (
        <div className="card" style={cardStyle} >
            <div className="card__title">{props.title}</div>
            <div className="card__p">{props.children}</div>
        </div>
    )
}