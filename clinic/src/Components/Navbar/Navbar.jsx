import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import {HashLink } from "react-router-hash-link"
import{Link} from "react-router-dom";




const Navbar = () => {
  
  return (

<>
    <nav className='container dark-nav'>
<img src={logo} alt="" className='logo' />
   <ul>
    <li>
    <HashLink to="#hero"className='Link'>Home</HashLink>
    </li>
    <li>
  <HashLink to="#doctors" className='Link'>Our Doctors</HashLink>
    </li>
    <li>
    <HashLink to="#about" className='Link'>About us</HashLink>
    </li>
    <li>
    <HashLink to="#services" className='Link'>Services</HashLink>
    </li>
<li>
<Link to='/contact'>Contact us</Link>
</li>
 

   </ul>
    </nav>
    </>
  )
}

export default Navbar