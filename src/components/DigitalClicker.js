import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state =  {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    );
  }
}

export default DigitalClicker;
