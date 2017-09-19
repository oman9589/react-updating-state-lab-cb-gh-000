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
      <div>
        <button onClick={this.handleClick}></button>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default YouTubeDebugger;
