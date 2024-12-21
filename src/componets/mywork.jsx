import React from 'react'
import theme from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data.js'
import arrow_icon from '../assets/arrow_icon.svg'

const mywork = () => {
  return (
    <div id='work' className='about flex flex-col justify-center items-center gap-20 m-[80px]'>
      <div className='about-title relative '>
      <h1 className=' flex text-[35px] sm:text-[60px] md:text-[80px] pt-4 relative z-50 font-semibold'>My work</h1>
      <img src={theme} alt="theme" className=' absolute h-28 w-28 md:h-44 md:w-44 md:top-0 -right-7 -top-3 z-30'/>
      </div>
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[80vw]  ">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" className=' w-[500px] h-fit cursor-pointer hover:border-2 border-solid hover:border-[#ff00ff] hover:scale-110 transition-all duration-300 rounded-xl  ' />
        })}
      </div>
      <div className=' flex items-center px-7 py-5 border-2 rounded-full text-sm sm:text-2xl md:text-4xl justify-center h-fit hover:scale-110 duration-300 transition-all hover:gap-x-2'>
        <p >Show More</p>
        <img src={arrow_icon} alt="" className=' flex justify-center items-center h-fit pt-3 pl-3' />
      </div>
        
    </div>
  )
}

export default mywork