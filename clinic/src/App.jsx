import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Doctors from './Components/Doctors/Doctors'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Touch from './Components/Touch/Touch'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'



const App = () => {
  return (
    <BrowserRouter basename='/'>

<div className='container'>

</div>

<Routes>
<Route path="/contact" element={<Contact/>} />
<Route path ="/" element={<Home/>}/>

</Routes>

    </BrowserRouter>
  )
}

export default App


// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Doctors from './Components/Doctors/Doctors'
// import Title from './Components/Title/Title'
// import About from './Components/About/About'
// import Services from './Components/Services/Services'
// import Touch from './Components/Touch/Touch'
// import {BrowserRouter,Route, Routes} from "react-router-dom"
// import Footer from './Components/Footer/Footer'
// import Contact from './Components/Contact/Contact'



// const App = () => {
//   return (
//     <BrowserRouter basename='/'>
// <Navbar/>
// <Hero/>
// <div className='container'>
// <Title title=' Meet Our Doctors'/>
// <Doctors/>
// <About/>
// <Title title='Our Services' />
// <Services/>
// <Title title="Get in touch"/>
// <Touch />
// <Footer />
// </div>

// <Routes>
// <Route path="/contact" element={<Contact/>} />
// </Routes>
//     </BrowserRouter>
//   )
// }

// export default App