import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Lifecycle methods
  componentDidMount() {
    console.log("method: componentDidMount()");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("method: componentWillUnmount()");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("method: tick()");
    this.setState({ date: new Date() });
  }

  render() {
    console.log("State: ", this.state.date.toLocaleTimeString());
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
