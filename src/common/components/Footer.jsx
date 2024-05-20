import React from 'react'
import { Link } from 'react-router-dom'
import DataPark from "../../assets/Group.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    
    <footer className='bg-[#071522]  w-full h-[306px] flex justify-center items-center'>
    <div className=" h-[200px] max-w-screen-xl  mx-auto p-4 flex flex-col justify-between items-center">
      <img src={DataPark} className='w-[125px] h-[30px]' alt="Datapark logo" />
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-customfont  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  bg-[#071522] text-[#C7CCD1] text-[16px]">
      <li>
       Forum
      </li>
      <li>
       Academy
      </li>
      <li>
      Consulting
      </li>
      <li className='hover:text-[#F7941D]'>
       <Link to="/">Career</Link>
      </li>
      <li>
      Community
      </li>
      <li>
      Center of Excellences
      </li>
      <li>
      News
      </li>
    </ul>
  </div>
  <div className=' flex w-[90px] justify-between md:order-2  md:space-x-0 rtl:space-x-reverse'>
    <FaFacebookF className='text-[#C7CCD1]' size={26} />
    <FaLinkedinIn className='text-[#C7CCD1]' size={26} />
  </div>
  <div className='w-[108px] h-[16px] md:order-2  md:space-x-0 rtl:space-x-reverse '>
    <p className='text-[14px] font-customfont font-medium leading-9 text-[#C7CCD1]'>© 2023 Datapark</p>
  </div>
  </div>
 
    </footer>
    
    </>
  )
}

export default Footer