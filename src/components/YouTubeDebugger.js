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
    };

    render(){
        return(
            <div>
            <button className = "bitrate" onClick ={ ()=> this.setState({
                ...this.state,
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            })}
            > Click me to change the bitrate.Your current bitrate is {this.state.settings.bitrate} < /button>

            <button className = "resolution" onClick = {() => this.setState({
                ...this.state,
                settings: {
                    ...this.state.settings,
                    video:{
                        resolution: '720p'
                    }
                }
            })}
            > Click me to change the resolution. Your current resolution is {this.state.settings.video.resolution} </button>
            </div>
        )
    }
}