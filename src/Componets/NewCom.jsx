import React, { Component } from 'react';
import bell from "./bell.png";
import bellX from "./bellX.png"

export class NewCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Send me A Hello",
       sub: "Subscribe",
       bellUrl: bellX
    };
  }
  styles = {
    fontStyle: "italic",
    color: "purple"
  };
  bellStyles = {
    width: "50px"
  };

  buttonChange = () =>{
    this.setState({
      message: "Hit the bell to get notification",
   });
  }
  imageChange = () =>{
    this.setState({
      bellUrl: bell
      message: "Than you 4 sub",
    })
  }
  render() {
    return (
      <div className='App'><h3 style={this.styles}>{this.state.message}</h3>
            <button onClick={this.buttonChange}>{this.state.sub}</button>
            <p/>
            <img src={this.state.bellUrl} alt="" style={this.bellStyles} onClick={this.imageChange}/>
      </div>
    )
  }
}

export default NewCom