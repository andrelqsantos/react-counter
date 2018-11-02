import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {

    constructor(props){
        super(props)
        this.state = { value: props.initialValue }    
    }

    sum(delta){
         this.setState({ value: this.state.value + delta })
    }

    sub(delta){
        this.setState({ value: this.state.value - delta })
    }

 

    render() {
        return (
            <div>
                <h1>CONTADOR</h1>
                <label><h1>{this.state.value}</h1></label>
                <br/>
                
                <button onClick={() => this.sum(1)}>PLUS</button>
                <button onClick={() => this.sub(1)}>SUB</button> 
            </div>
        );
    }
}

export default App;