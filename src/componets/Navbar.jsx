import React, { useRef, useState } from 'react'
import nav_underline from '../assets/nav_underline.svg'
import theme from '../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'


const Navbar = () => {

  const [menu , setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right = "-200px";
  }

  return (
    <div className=' flex justify-between items-center h-10 mx-10 pt-10'>
      <div className='flex flex-col justify-between items-center relative'>
         <h1 className=' flex text-[25px] sm:text-[35px] md:text-[40px] pt-2 relative z-50 font-medium'>Noman</h1>
         
              <img src={theme} alt="theme" className=' absolute h-16 w-16 md:h-28 md:w-24 -right-5 sm:-right-5 sm:top-3 md:-top-2 z-30 '/>

              <img src={menu_open} onClick={openMenu} alt="" className=' block sm:hidden fixed right-5 top-6' />
      </div>
        <ul ref={menuRef} className=' sm:gap-x-8  sm:flex sm:flex-row sm:justify-end sm:bg-[#161513] sm:w-[60vw] sm:text-xs sm:mx-auto sm:right-0 sm:items-end sm:relative md:justify-center md:items-center md:gap-x-3 
        items-start fixed flex flex-col px-5 top-0 gap-[30px] bg-[#1f0016] w-[150px] h-fit z-[60] -right-[350px] rounded-tl-lg rounded-bl-lg transition-all '>
          
          <img src={menu_close} onClick={closeMenu} alt=""  className=' block sm:hidden relative top-[20px] left-[100px] w-[30px] right-8' />
          
          
            <li className='flex flex-col  cursor-pointer'><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'? <img src={nav_underline} alt="" className=' flex m-auto' /> : <></>}</li>
            <li className='flex flex-col  cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==='about'? <img src={nav_underline} alt=""  className=' flex m-auto' /> : <></>}</li>
            <li className='flex flex-col  cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==='services'? <img src={nav_underline} alt=""  className=' flex m-auto' /> : <></>}</li>
            <li className='flex flex-col  cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#work' ><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==='w'? <img src={nav_underline} alt=""  className=' flex m-auto' /> : <></>}</li>
            <li className='flex flex-col  cursor-pointer'><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'? <img src={nav_underline} alt="" className=' flex m-auto' /> : <></>}</li>
        </ul>
        <div>
            <button className='hidden md:flex md:px-3 md:text-[8px] justify-center bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 rounded-2xl px-3 py-1 text-xs cursor-pointer hover:scale-110 transition-all duration-75'> <AnchorLink className='anchor-link' offset={50} href='#contact' >connect with me</AnchorLink></button>
        </div>
    </div>
  )
}

export default Navbar