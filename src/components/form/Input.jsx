import "./Input.css"
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <div className="c-input">
                <input
                    className="c-input__input"
                    value={valor}
                    onChange={quandoMudar} />
                <input
                    className="c-input__input c-input--read"
                    value={valor}
                    readOnly />
                <input
                    className="c-input__input c-input--undefined"
                    value={undefined} />
            </div>
        </div>
    )
}