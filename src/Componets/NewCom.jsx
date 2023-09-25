import React, { Component } from 'react'

export class NewCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Send me A Hello"
    };
  }
  render() {
    return (
      <div className=''><h3>{this.state.message}</h3></div>
    )
  }
}

export default NewCom