// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state ={
        errors: [],
        user: null, 
        settings: {
            bitrate: 8, 
            video: {
                resolution: '1080p'
            }
        }
    }


    render(){
        return (
            <div>
                <button onClick={()=>this.setState({settings:{...this.state.settings, bitrate: 12}})} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick={()=>this.setState({settings: {...this.state.settings, video:{resolution: '720p'}}})} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}