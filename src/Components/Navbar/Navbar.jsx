import React, { Component } from 'react';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import inst_name from '../images/inst_name.png';
import home from '../images/home.png';
import message from '../images/message.png';
import find from '../images/find.png';
import react from '../images/react.png';
import Avatar from '@material-ui/core/Avatar'
import dp from '../images/profilePic.jpg'

export class Navbar extends Component {
    constructor (props){
        super(props);
        this.state = { }
    }
  render() {
    return (
    <div>
      <div className='navbar_barContent'>
        <Grid container>
            <Grid item xs={2}></Grid>

            <Grid item xs={3}> 
            <img className='loginPage_logo' src={inst_name} width="120px" alt="" />
            </Grid>

            <Grid item xs={3}>
                <input type="text" placeholder='search'/>
            </Grid>

            <Grid item xs={3} style={{"display" : "flex"}}>
                <img className='navbar_img' src={home} width="25px" height="25px" alt="" />
                <img className='navbar_img' src={message} width="25px" height="25px" alt="" />
                <img className='navbar_img' src={find} width="25px" height="25px" alt="" />
                <img className='navbar_img' src={react} width="25px" height="25px" alt="" />
                <Avatar src={dp} className='navbar_img' style={{"maxWidth" : "30px", "maxHeight" : "30px"}} />
            </Grid>

            <Grid item xs={1}></Grid>
        </Grid>
      </div>
      </div>
    ); 
  }
}

export default Navbar