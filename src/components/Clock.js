import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      isOn: true 
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleChange() {

  }
  render() {
    return (
      <>
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>

        <div>
          {this.state.isOn? "On": "Off"}
          <button>Click Me</button>
        </div>
      </>
    );
  }
}

export default Clock;