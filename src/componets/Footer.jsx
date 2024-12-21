import React from 'react'
import user_icon from '../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div>
        <div className="contact_left flex flex-col md:flex-row w-[80vw] gap-x-[50px] md:gap-[150px] lg:gap-[210px] items-center lg:items-center md:items-start mx-auto ">
            <div className=' flex flex-col mt-10 w-[400px] '>
                <h1 className=' font-bold text-[40px] bg-gradient-to-r from-yellow-500 via-red-500 to-black bg-clip-text text-transparent text-center md:text-start '>Noman</h1>
                
                <p className=' w-[250px] sm:w-[350px] md:w-[200px] mx-auto text-[#d8d8d8] text-[15px] leading-5 '> I am a Mern-Stack developer from, Pakistan with 2 years of experience in companies like Microsoft, Tesla and Apple..</p>
            </div>


        <form onSubmit={onsubmit} className="contact_right flex flex-col md:flex-row justify-start items-start  gap-[20px] mt-8 sm:mt-16 lg:mt-24 md:mt-20 md:w-[40vw] lg:w-[80vw] ">

            <div className='flex flex-col sm:flex-row justify-center gap-5 items-center w-[50vw] md:w-[60vw] md:gap-x-2 lg:w-[0vw] lg:gap-x-5 mx-auto'>

            <input type="text" name="username" placeholder='Enter Your Email' className='w-[200px] text-center h-[50px] rounded-full text-[20px] font-outfit text-[#a0a0a0] bg-[#32323c] border-none' />
            <button type="submit" className='flex items-center px-10 py-3 rounded-full text-lg justify-center bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 hover:scale-110 duration-300 transition-all '><AnchorLink className='anchor-link' offset={50} href='#contact' >Subscribe</AnchorLink></button>
            </div>
            </form>
        </div>

        <hr  className=' w-[80vw] mx-auto mt-10 text-[30px] font-bold'/>

        <div className='w-[70vw] md:w-[80vw] mx-auto mt-5 '>
            <div className='flex flex-col gap-y-5 sm:flex-row justify-between items-center'>
                <p>© 2024 NomanRiasat. All rights reserved.</p>
                <div className=' flex gap-2 sm:gap-6 md:gap-10'>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer