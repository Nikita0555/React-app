import React from 'react'
import './Hero.css'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {

  return (
    <div id="hero" className='hero container'>
        <div className='hero-text'>
    <h1>" A perfect family clinic for both kids and adults!"</h1>
  <p>
    We provide to you the best choice for you. Adjust it to your health needs and make sure your undergo treatment with our
highly qualified doctors you can consult with us which type of service is suitable for your health.</p>
    
  <HashLink to="#about" > <button className='btn btn-primary'>Explore more</button></HashLink>
    

        </div>
    </div>
  )
}

export default Hero