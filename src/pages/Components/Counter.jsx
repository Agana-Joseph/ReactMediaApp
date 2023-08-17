import React, { Component } from 'react'
import updatedComp from './HigherOder';

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
      <div onMouseEnter={this.incrementCount}>{this.props.name} Incremented to {count}</div>
    )
  }
}

export default updatedComp(Counter);