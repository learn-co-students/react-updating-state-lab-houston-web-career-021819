// Code YouTubeDebugger Component Here
import React, {Component} from 'react';
export default class YouTubeDebugger extends Component{
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

  changeBitRate=()=>{
      this.setState({settings:
     {...this.state.settings,
      bitrate: 12}})
     }
  changeResolution=()=>{
      this.setState({...this.state,settings:{...this.state.settings, video:{resolution:'720p'}
    }
    })
  }
  render(){
      return(
          <div>
          <button className='bitrate' onClick={this.changeBitRate}>Change Bit Rate</button>
          <button className = 'resolution' onClick={this.changeResolution}>Change Resolution</button>
          </div>
      )
  }
}