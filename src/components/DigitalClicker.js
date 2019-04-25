import React from 'react'

export default class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

    onCounterUpdate = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return(
            <button onClick={this.onCounterUpdate}>{this.state.timesClicked}</button>
        )
    }


}