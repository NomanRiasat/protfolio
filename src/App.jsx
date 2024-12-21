import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import About from './componets/About'
import Services from './componets/Services'
import Mywork from './componets/mywork'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div className='bg-[#161513] text-white h-full w-full mx-auto overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App