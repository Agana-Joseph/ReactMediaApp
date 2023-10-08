import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Maincontent from '../Maincontent/Maincontent';

export class Home extends Component {
    constructor (props){
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div>
        <Navbar />
        <Maincontent />

      </div>
    ); 
  }
}

export default Home