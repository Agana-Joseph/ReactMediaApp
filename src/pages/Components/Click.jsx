import React, { Component } from 'react'
import updatedComp from './HigherOder';

export class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    };

    updateHover = ()=>{
        this.setState({count: this.state.count + 1})
    };

  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={this.updateHover}>{this.props.name} Clicked {count} time</button>
      </div>
    );
  }
}

export default updatedComp(Click);