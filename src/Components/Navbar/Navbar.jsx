import React, { Component } from 'react'
import './Navbar.css'
import { Grid } from '@material-ui/core/Grid'

export class Navbar extends Component {
    constructor (props){
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div className='navbar_barContent'>Navbar section by JJ</div>
    ); 
  }
}

export default Navbar