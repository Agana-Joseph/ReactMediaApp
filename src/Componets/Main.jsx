import React from 'react'
import './styles/Main.scss'
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'

 const Main = () => {
  return (
    <div className='main'>
        <div className='main_container'>

            <div className='main_content'>
                <div className='text'>
                    <p>Hello there !</p>
                    <h1>I am Joseph</h1>
                    <p>Front-end Developer & Designer</p>

                    <div className='icons'>
                        <Twitter className='icon'/>
                        <Instagram className='icon'/>
                        <Facebook className='icon'/>
                        <LinkedIn className='icon'/>
                    </div>

                    <div className='buttons'>
                        <button> See Me</button>
                        <button> Hire Me</button>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Main
