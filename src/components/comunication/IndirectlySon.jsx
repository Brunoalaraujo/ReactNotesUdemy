import React from "react";

export default props => {
    const cb = props.quandoClicar
    const randomAge = () => parseInt(Math.random() * (20)) + 50
    const randomNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb(randomNerd() ? "João" : "Pedro", randomAge(), randomNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}