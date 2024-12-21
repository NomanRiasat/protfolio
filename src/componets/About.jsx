import React from 'react'
import profile_image from '../assets/profile_image.jpg'
import theme from '../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className='about flex flex-col justify-between items-center'>

      <div className='about-title relative '>
      <h1 className=' flex text-[80px] pt-4 relative z-50'>About</h1>
      <img src={theme} alt="theme" className=' absolute h-44 w-44 -right-7 top-0 z-10'/>
      </div>


      <div className=' about-section flex gap-x-5 sm:gap-x-10 md:gap-x-20 mt-20'>
        <div className='about-left'>
          <div className=' hidden sm:flex justify-center items-start w-[250px] h-full  rounded-xl'>
          <img src={profile_image} alt="profile_img" className=' h-full rounded-xl' />
          </div>
        </div>

        <div className="about-right flex flex-col justify-center items-start w-[250px] mx-auto sm-w-[20vw] md:w-[35vw] lg:w-[50vw] tracking-wider gap-y-2 text-sm">
           <div className="aboutpara">
            <p>I'm a Mern-Stack Developer with professional experience at the University of Gujrat. I have had the opportunity to work with well-known organizations, contributing meaningfully to their success and development.Building on my decade of frontend expertise, I expanded my skill set as a <b>MERN Stack Developer</b> through a 4-month internship at Adan IT Center, Gujrat, Pakistan. There, I refined my proficiency in MongoDB, Express.js, React, and Node.js, enhancing my versatility and adaptability in modern web development.</p>
            <p className=' pt-5'>My deep passion for frontend development is evident through both my extensive experience and the enthusiasm and commitment I invest in every project.</p>
           </div>


           <div className="about_skill flex flex-col gap-y-2 w-[250px] mx-auto sm:w-96 md:w-full pt-5 transition-all text-xl">
          
           <div className=' flex justify-start items-center gap-5 hover:scale-110 duration-300 delay-100 transition-all'>
            <p className='w-[100px]'>HTML & CSS</p>
            <hr style={{width:"80%"}} className=' outline-none border-non bg-gradient-to-r from-yellow-500 via-red-500 to-black w-[50%] h-[5px] rounded-lg'/>
           </div>

           <div className=' flex justify-start items-center gap-5 hover:scale-110 duration-300 delay-100 transition-all'>
            <p className='w-[100px]'>JavaScript</p>
            <hr style={{width:"70%"}} className=' outline-none border-non bg-gradient-to-r from-yellow-500 via-red-500 to-black w-[50%] h-[5px] rounded-lg'/>
           </div>

           <div className=' flex justify-start items-center gap-5 hover:scale-110 duration-300 delay-100 transition-all'>
            <p className='w-[100px]'>Ract JS</p>
            <hr style={{width:"60%"}} className=' outline-none border-non bg-gradient-to-r from-yellow-500 via-red-500 to-black w-[50%] h-[5px] rounded-lg'/>
           </div>
           <div className=' flex justify-start items-center gap-5 hover:scale-110 duration-300 delay-100 transition-all'>
            <p className='w-[100px]'>Node JS</p>
            <hr style={{width:"50%"}} className=' outline-none border-non bg-gradient-to-r from-yellow-500 via-red-500 to-black w-[50%] h-[5px] rounded-lg'/>
           </div>
           </div>

        </div>
      </div>
      <div className="about_achivement flex w-[250px] sm:w-52 md:w-64 gap-5 md:gap-x-10 justify-center items-center lg:w-[80vw] m-10 mx-auto ">

        <div className='flex flex-col justify-center items-center gap-y-3 hover:scale-110 duration-300 delay-100 transition-all'>
          <h1 className=' bg-gradient-to-r from-yellow-500 via-red-500 to-black bg-clip-text text-transparent text-5xl'>5+</h1>
          <p className='text-sm sm:text-xl md:text-3xl'> YEARS OF EXPRIENCE</p>
        </div>
          <hr className=' hidden sm:flex w-[5px] h-[10vh] bg-white  bg-gradient-to-b from-yellow-500 via-red-500 to-black rounded-lg'/> 
        
        
        <div className='flex flex-col justify-center items-center gap-y-3 hover:scale-110 duration-300 delay-100 transition-all'>
          <h1 className='bg-gradient-to-r from-yellow-500 via-red-500 to-black bg-clip-text text-transparent text-5xl'>15+</h1>
          <p className='text-sm sm:text-xl md:text-3xl'>PROJECTS COMPLETED</p>
        </div>
          <hr className='hidden sm:flex w-[5px] h-[10vh] bg-white outline-none border-non bg-gradient-to-b from-yellow-500 via-red-500 to-black rounded-lg'/> 
       
       
        <div className='flex flex-col justify-center items-center gap-y-3 hover:scale-110 duration-300 delay-100 transition-all'>
          <h1 className=' bg-gradient-to-r from-yellow-500 via-red-500 to-black bg-clip-text text-transparent text-5xl'>20+</h1>
          <p className='text-sm sm:text-xl md:text-3xl'>HAPPY CLIENTS</p>
        </div>

      
      </div>
    </div>
  )
}

export default About