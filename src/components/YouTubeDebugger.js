// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YoutubeDebugger extends Component {
	
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

	editBitRate = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	editResolution = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					resolution: '720p'
				}
			}
		})
	}

	render() {
		console.log(this.state.settings.bitrate)
		console.log(this.state.settings.video.resolution)
		return (
			<div>
			<button className="bitrate" onClick={this.editBitRate}> Change Bitrate</button>
			<button className="resolution" onClick={this.editResolution}> Change Resolution</button>
			</div>
			)
	}
}