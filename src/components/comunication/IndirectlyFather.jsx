import React, { useState } from "react";
import IndirectlySon from "./IndirectlySon";

export default props => {
    const [name, setName] = useState("?")
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function GiveInformation(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong></span>
                <span> {nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndirectlySon quandoClicar={GiveInformation}></IndirectlySon>
        </div>
    )
}