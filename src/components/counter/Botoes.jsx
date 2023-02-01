import React from "react";

export default props => {
    return (
        <div>
            <button className="c-counter__button" onClick={props.setInc}> + </button>
            <button className="c-counter__button" onClick={props.setDec}> - </button>

        </div>
    )
}