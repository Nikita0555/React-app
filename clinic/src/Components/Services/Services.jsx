import React from 'react'
import './Services.css'
import service_1 from'../../assets/service1.avif'
import service_2 from '../../assets/service2.avif'
import service_3 from '../../assets/ser3.jpg'
import service_4 from '../../assets/service4.jpg'

function Services() {
  return (
    <div id="services"className='service'>
    <div className='gallery'>

    <div className='ser1'>
    <img src={service_1}>
    </img>
    <h3>Appointment</h3>
    </div>
   <div className='ser1'>
    <img src={service_2}></img>
    <h3>24x7 Pharmacy Services</h3>
    </div>
    <div className='ser1'>
    <img src={service_3}></img>
    <h3>Health Plans</h3>
     </div>
     <div className='ser1'>
    <img src={service_4}></img>
    <h3>Blood testing</h3>
    </div>
    </div>


    </div>
  )
}

export default Services