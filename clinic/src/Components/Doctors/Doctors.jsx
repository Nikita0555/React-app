import React from 'react'
import './Doctors.css'
import doctor_1 from '../../assets/doctor1.jpg'
import doctor_2 from '../../assets/doctor2.jpg'
import doctor_3 from '../../assets/doctor3.avif'

const Doctors = () => {
  return (
    <div id="doctors" className='doctors'>
        <div className='doctor'>
            <img src={doctor_1} alt=""></img>
            <div className='caption'>
                <p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Dr.Chourasiya</p>
                <p>"From Bhopal with 15+ years of experience"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9743; 8826549722</p>
              
    
            </div>
        </div>
        <div className='doctor'>
            <img src={doctor_2} alt=""></img>
            <div className='caption'>
                <p> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Dr.Upadhyay</p>
                <p>"From Indore with 20+ years of experience"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9743;9437569011</p>
            </div>
        </div>
        <div className='doctor'>
            <img src={doctor_3} alt=""></img>
            <div className='caption'>
                <p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Dr.P.Mandal</p>
                <p>"From Bhopal with 18+ years of experience"</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9743; 9954871156</p>
            </div>
        </div>

    </div>
  )
}

export default Doctors