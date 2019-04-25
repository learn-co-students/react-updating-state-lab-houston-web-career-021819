// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked:0
    }

    changeTime = () =>{
        //console.log('you reached me')
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
        console.log(this.state.timesClicked)
    }

    render(){
        return(
            <button onClick = {this.changeTime}>
              {this.state.timesClicked}
            </button>
        )
    }
}