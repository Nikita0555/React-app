import React from 'react'
import Hero from '../Hero/Hero'
import Doctors from '../Doctors/Doctors'
import Title from '../Title/Title'
import About from '../About/About'
import Services from '../Services/Services'
import Touch from '../Touch/Touch'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'




const Home = () => {
  return (
    <div>
    <Navbar />
<Hero/>
<div className='container'>
<Title title=' Meet Our Doctors'/>
<Doctors />
<About/>
<Title title='Our Services' />
<Services/>
<Title title="Get in touch"/>
<Touch />
<Footer />

</div>
</div>

  )
}

export default Home