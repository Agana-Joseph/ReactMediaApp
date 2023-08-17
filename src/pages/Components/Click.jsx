import React, { Component } from 'react'

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
        <button onClick={this.updateHover}>Clicked {count} time</button>
      </div>
    );
  }
}

export default Click