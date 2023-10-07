import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import inst_image from '../images/inst_image.png'
import inst_name from '../images/inst_name.png'
import fbIcon from '../images/fbIcon.avif'
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
                                <input className='loginPage_txt' type="text" placeholder='Phone number, username or email'/>
                                <input className='loginPage_txt' type="password" placeholder='password' />
                                <button className='login_btn'>Sign In</button>
                            </div>

                            <div className='login-ordiv'>
                                <div className='login_dividor'></div>
                                <div className='login_or'>OR</div>
                                <div className='login_dividor'></div>
                            </div>

                            <div className='login_fb'>
                            <img className='loginPage_logo' src={fbIcon} alt="" style={{"marginRight" : "5px"}} /> Login with Facbook
                            </div>
                            <div className='login_forgot'>Forgot password</div>
                        </div>
                    </div>
                    <div className='loginPage_signUpOption'>
                        <div className='loginPage_signUp'>
                            Don't have an account? Sign Up
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