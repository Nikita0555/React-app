import React from 'react'
import './Touch.css'
import msg_icon from '../../assets/msg-icon.png'
import touch from '../../assets/touch.avif'
import{Link}from 'react-router-dom'


function Touch(){


  return (



    <div className='touch'>
        <div className='touch-col1'>
            <h3>Send us a message <img src={msg_icon}/></h3>
            <p>Feel free to reach out through contact form or find our contact information below.Your
            feedback,questions and suggestions are important to us as we strive to provide exceptional services to our 
            community.
            </p>
            <ul>
                <li>&#9993; Contact bardiyamedical@gmail.com</li>
                <li>&#9742; +1 123-456-789</li>
                <li>&#9881; Patna Bujurg near Bus stand,Rehli<br/> Sagar,Madhya Pradesh</li>
                
            </ul>
        </div>
        <div className='touch-col2'>
         <img src={touch} />
       <Link to='/contact'><button>Get in Touch</button></Link>
        </div>
    </div>
  )
}


export default Touch