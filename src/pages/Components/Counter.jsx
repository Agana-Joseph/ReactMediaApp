import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  };

  incrementCount = ()=>{
      this.setState({count: this.state.count + 1})
  };
  render() {
    const {count} = this.state;
    return (
      <div onMouseEnter={this.incrementCount}>Incremented to {count}</div>
    )
  }
}

export default Counter