import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import inst_image from '../images/inst_image.png'
import inst_name from '../images/inst_name.png'
import './LoginPage.css'

export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = { }
  }

    render() {
        return (
          <div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                <div className='loginPage_main'>
                    <div className='inst_image'>
                        <img src={inst_image} width="300" alt="" />
                    </div>
                    <div className='loginPage_rightcomponent'>
                        <img className='loginPage_logo' src={inst_name} alt="" />
                        <div>
                            <div className='loginPage_signin'>
                                <input className='loginPage_txt' type="text" />
                                <input className='loginPage_txt' type="password" />
                                <button className='login_btn'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
          </div>
        )
      }
    }

export default LoginPage