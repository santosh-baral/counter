import React, { Component } from "react";
class Counter extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      count: 0

    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div >
        <button class="increment" onClick={this.incrementCount}>+</button>
        <h1 class="number" >{this.state.count} </h1>
        <button class="decrement" onClick={this.decrementCount}>-</button>
       
      </div>
    );
  }
}
export default Counter;