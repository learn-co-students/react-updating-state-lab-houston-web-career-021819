// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  checkState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={() => {
            this.setState({
              settings: { ...this.state.settings, bitrate: 12 }
            });
          }}
        >
          bitrate
        </button>

        <button
          className="resolution"
          onClick={() => {
            this.setState({
              settings: {
                ...this.state.settings,
                video: { resolution: "720p" }
              }
            });
          }}
        >
          resolution
        </button>

        <button onClick={this.checkState}>check state</button>
      </div>
    );
  }
}
