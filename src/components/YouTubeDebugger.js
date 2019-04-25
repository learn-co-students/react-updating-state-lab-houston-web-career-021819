// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }

        }
    }

    changeBitrate = () => {
        this.setState ({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    alterResolution = () => {
        this.setState ({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        console.log(this.state.settings.bitrate)
        return(

        <React.Fragment>
        <div>
            <button 
                className = 'bitrate' onClick = {this.changeBitrate}>Change Bitrate
            </button>
        </div>

        <div>
            <button 
                className = 'resolution' onClick = {this.alterResolution}>Change Res
            </button>
        </div>
        </React.Fragment>
        )
    }


}