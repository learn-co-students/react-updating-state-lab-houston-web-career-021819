// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    
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

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}> {this.state.settings.bitrate} </button>
                <button className='resolution' onClick={this.handleResolution}> {this.state.settings.video.resolution} </button>
            </div>
        )
    }

    handleBitrate = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    // state = {
//     errors: [],
//     user: null,
//     settings: {
//         bitrate: 8,
//         video: {
//             resolution: '1080p'
//         }
//     }
// }

    handleResolution = () => {
        this.setState({
            ...this.state, 
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }

}


export default YouTubeDebugger
