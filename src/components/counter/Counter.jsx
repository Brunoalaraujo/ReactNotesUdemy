import "./Counter.css"
import React, { Component } from "react";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Counter extends Component {

    state = {
        numb: this.props.firstNumb || 0,
        passo: this.props.firstPasso || 5,
    }

    inc = () => {
        this.setState({
            numb: this.state.numb + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numb: this.state.numb - this.state.passo,
        })
    }

    setPasso = (newPasso) => {
        this.setState({
            passo: newPasso,
        })
    }
 
    render() {
        return (
            <div>
                <h2>Contador</h2>
               <Display numb={this.state.numb}/>
               <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
               <Botoes setInc={this.inc} setDec={this.dec}/> 
            </div>
        )
    }
}

export default Counter