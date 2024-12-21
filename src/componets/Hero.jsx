import React from 'react'
import profile_image from '../assets/profile_image.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className=' flex flex-col justify-center items-center gap-y-5 mb-20'>
        <img src={profile_image} alt="" className=' h-40 w-40 sm:h-60 sm:w-60 md:h-72 md:w-72 rounded-full mt-[150px]' />
        <h1 className=' text-center text-[30px] w-[250px] sm:w-full mx-auto font-bold  md:[35vw]'><span className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent text-3xl font-bold  ">Hey,I'm Noman Riasat, 
            </span>    Mern-stack Developer </h1>
       
       
        <p className='text-center text-[15px] w-[250px] sm:w-[50vw] mx-auto '>I am a web developer and a graduate of the University of Gujrat. I have hands-on experience working on diverse web development projects and successfully completed a four-month internship at <b>AdanIT Center</b> in Gujrat</p>
        
        
        <div className='flex justify-center items-center gap-x-5'>
            <div className=' px-5 rounded-3xl py-1 cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 hover:scale-110 transition-all duration-300 hover:border-[2px] border-white'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>


            <div className=' px-5 py-1 rounded-3xl border cursor-pointer hover:scale-110 transition-all  duration-300 hover:border-[2px] border-white'>My resume</div>
        </div>
    </div>
  )
}

export default Hero