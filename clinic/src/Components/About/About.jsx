import React from 'react'
import './About.css'
import about_img from '../../assets/aboutimg1.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
 <div className='about-left'>
 <img src={about_img} className='about-img'></img>
 </div>

 <div className='about-right'>
<h2>  WELCOME TO OUR BARDIYA MEDICAL STORE </h2>
<h3> A One Stop Centre in your neighbourhood for all your healthcare needs </h3>
<br></br>
<p>Our Family Clinic provides affordable and quality healthcare to rural and urban areas in India. 
The organization implements an innovative family and patient-centered healthcare model delivered through a chain of family
 clinics. We strive to make Our Family Clinic a place where patients can always feel confident that they are receiving the best care in a friendly atmosphere. By understanding what is most important to you and your family, we’re able to deliver better quality healthcare that is also convenient. Our Family Clinic offers primary care for individuals and families across all ages, genders, and diseases. We provide care for all members of a family during all phases of life - infancy, adolescence, adulthood, and senior years. Our Family Clinic revives the age old concept of a ‘Family Doctor’
 who you can trust and rely on for all your healthcare needs, be it an advice, treatment or even a minor surgical procedure.</p>

 </div>
    </div>
  )
}

export default About