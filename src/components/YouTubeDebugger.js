import React from 'react'

export default class YoutubeDebugger extends React.Component{

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

    onBitrateUpdate = () => {
        this.setState({
            ...this.state,
            settings: {
                bitrate: 12,
                video: {
                    resolution: this.state.settings.video.resolution
                }
            }
        })
    }

    onResolutionUpdate = () => {
        this.setState({
            ...this.state,
            settings: {
                bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.onBitrateUpdate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.onResolutionUpdate}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }


}