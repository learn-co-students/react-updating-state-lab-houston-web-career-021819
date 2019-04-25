// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
  
  changeBitrate = () => {
     //console.log('you reached me')
     this.setState({
         settings: {
             ...this.state.settings,
             bitrate:12
         }
     })
  } 

  changeResolution = () =>{
     // console.log('you reached me')
      this.setState({...this.state, settings: {...this.state.settings,video:{resolution:'720p'}}
      })
      console.log(this.state.settings.video)
  }



    render(){
        return(
            <div>
            <button className = "bitrate" onClick = {this.changeBitrate}>  </button>
            <button className = "resolution" onClick = {this.changeResolution}></button>
            </div>
           
        )
    }
}
 