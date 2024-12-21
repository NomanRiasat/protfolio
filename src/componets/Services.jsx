import React from 'react'
import theme from '../assets/theme_pattern.svg'
import Services_Data from '../assets/services_data'
import arrow_icon from '../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='flex flex-col justify-between items-center'>
        <div className='about-title relative '>
      <h1 className=' flex text-[80px] pt-4 relative z-50'>Services</h1>
      <img src={theme} alt="theme" className=' absolute h-44 w-44 -right-7 top-0 z-10'/>
      </div>
      <div className="services_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 w-[80vw] md:w-[90vw] ">
        {Services_Data.map((Services,index)=>{
          return <div key={index} className='sevices flex flex-col justify-center gap-5 px-5 py-5 rounded-2xl border-2 border-white cursor-pointer hover:border-2 border-solid hover:border-[#ff00ff] hover:scale-105 transition-all duration-300 hover:bg-gradient-to-b from-red-600 to-black'>
            <h1 className=' text-[25px] font-semibold'>{Services.s_no}</h1>
            <h2 className=' text-[30px] md:text-[20px] font-extrabold bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent'>{Services.s_name}</h2>
            <h3 className=' text-[#d4d4d4] text-[24px] md:text-[15px] max-w-[300px] tracking-wide'>{Services.s_desc}</h3>
            <div className=' flex items-center gap-x-3  bg-gradient-to-b from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent text-lg'>
              <p >Read More</p>
              <img src={arrow_icon} alt="arrow_icon"className='flex h-5 w-5' />
            </div>
          </div>
        })}
      </div>
        </div>
  )
}

export default Services