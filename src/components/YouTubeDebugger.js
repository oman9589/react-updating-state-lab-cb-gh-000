import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {bitrate: 8, video: {resolution: '1080p'}},
    }
  }

  handleClick = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {bitrate: 8, video: {resolution: '1080p'}},
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default YouTubeDebugger;