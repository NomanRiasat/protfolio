import React from 'react'
import theme from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'


const Contact = () => {
// email form 
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "cdb7184b-34e9-44b8-8be8-20735c6cf7a0");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
   alert(res.message)};

};

  return (
    <div id='contact' className='flex flex-col justify-between items-center'>
         <div className='about-title relative '>
      <h1 className=' flex text-[45px] sm:text-[60px] md:text-[80px] pt-4 relative z-50 font-semibold'>Get in touch</h1>
      <img src={theme} alt="theme" className=' absolute h-28 w-28 md:h-44 md:w-44 -right-7 top-0 z-30'/>
      </div>


      <div className="contact_left flex flex-col md:flex-row gap-[20px] sm:gap-[100px] lg:gap-[150px] justify-center items-center w-[80vw] sm:items-center md:items-center lg:items-center mx-auto">
        <div className=' flex flex-col gap-5 w-[300px]  '>

            <h1 className=' font-bold text-4xl sm:text-6xl md:text-[60px] bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent'>Let's talk</h1>
            <p className=' w-[250px] sm:w-[300px] text-[#d8d8d8] text-[20px] leading-10 '> I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className=' flex flex-col gap-8 font-[22px] text-[#d8d8d8] '>
                <div className=' flex  gap-x-5 items-center'><img src={mail_icon} alt="" /><p>mughalnoman789@gmail.com</p></div>
                <div className=' flex  gap-x-5 items-center'><img src={location_icon} alt="" /><p>Gujrat,Pakistan</p></div>
                <div className=' flex  gap-x-5 items-center'><img src={call_icon} alt="" /><p>+923107635507 || +923348248513</p></div>
            </div>
        </div>

        
        <form onSubmit={onSubmit} className="contact_right flex flex-col w-[80vw] justify-center items-center gap-2 sm:gap-y-[20px] mt-5 sm:mt-10 lg:mt-20 ">
          <div className=' flex flex-col gap-5'>
            <label htmlFor="" className=' text-[#d8d8d8] font-bold text-[20px] '>Your Name</label>
            <input type="text" name="username" placeholder='Enter Your Name' className='w-[250px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[550px] h-[50px] rounded-lg pl-5 text-[20px] font-outfit text-[#a0a0a0] bg-[#32323c] border-none ' />
            <label htmlFor="" className=' text-[#d8d8d8] font-bold text-[20px] '>Your Email</label>
            <input type="text" name="email" required placeholder='Enter Your Email' className='w-[250px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[550px] h-[50px] rounded-lg pl-5 text-[20px] font-outfit text-[#a0a0a0] bg-[#32323c] border-none'/>
            <label htmlFor="" className=' text-[#d8d8d8] font-bold text-[20px] '>Write your message here</label>
            <textarea name="message" required placeholder='Enter Your Message' className='w-[250px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[550px] rounded-lg p-5 text-[20px] font-outfit text-[#a0a0a0] bg-[#32323c] border-none ' rows={6}></textarea>
            <div className=' flex justify-center items-center'>
            <button type="submit" className='flex  px-10 py-3 rounded-full text-xl bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 hover:scale-110 duration-300 transition-all '>Submit now
            </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact