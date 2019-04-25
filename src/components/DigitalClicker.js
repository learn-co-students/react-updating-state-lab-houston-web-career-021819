import React, {Component} from 'react'

export default class DigitalClicker extends Component {
	constructor() {
		super()

		this.state = {
			timesClicked: 0
		}
	}

	isClicked = () => {
		this.setState({
			timesClicked: this.state.timesClicked +1
		})
	}


	render() {
		console.log(this.state.timesClicked)
		return (
			<button onClick={this.isClicked}>{this.state.timesClicked}</button>
			)
	}
}