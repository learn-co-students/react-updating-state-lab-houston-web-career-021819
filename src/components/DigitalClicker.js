// Code DigitalClicker Component Here
import React, {Component} from 'react';
export default class DigitalClicker extends Component{
    state = {timesClicked:0}
    
    newCount = ()=>{ 
       const num=this.state.timesClicked + 1
       this.setState({timesClicked:num})
    }
    render(){
        return(
      <div>
     <button onClick = {this.newCount}>{this.state.timesClicked}</button>
     </div>
        )
     
    }
}