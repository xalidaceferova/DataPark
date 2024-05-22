import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DataPark from "../../assets/Group.png"

import { Button } from './ui/button'
import { Input } from './ui/input'
import { IoIosSearch } from 'react-icons/io'
const Navbar = ({setSearch}) => {
  const[show,setShow]=useState(false)
  const togglenav=()=>{
    setShow(!show)
  }
  let inp=useRef("")
  return (
    <>
    <nav className="bg-[#071522] w-full">
      <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
        <img src={DataPark} className='w-[125px] h-[30px]' alt="" />
        <div className="flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
          <Button variant="login">Login</Button>
          <Button>Sign Up</Button>
          <button onClick={togglenav} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={show}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full xl:flex xl:w-auto lg:order-1 ${show ? "" : "hidden"}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-customfont border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse xl:flex-row lg:mt-0 lg:border-0 bg-[#071522] text-[#C3C3C3] text-[16px]">
            <li>Forum</li>
            <li>Academy</li>
            <li>Consulting</li>
            <li className='hover:text-[#F7941D]'><Link to="/">Career</Link></li>
            <li>Community</li>
            <li>Center of Excellences</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </nav>
    <div className='w-full h-[212px] bg-[#081623] flex items-center justify-center'>
      <div className='w-full max-w-screen-xl h-[132px] bg-[#081623] flex flex-col justify-between px-4'>
        <h1 className='text-[#F7941E] font-secondfont text-[25px] font-medium leading-9'>Search Vacancy</h1>
        <div className='w-full max-w-[950px] h-[46px] relative flex justify-between'>
          <IoIosSearch className="absolute text-[#B1B9C2] top-3 left-3" size={20}/> <Input placeholder="Write the name of the vacancy.." ref={inp}/>
          <Button size="search" onClick={()=>{
            setSearch(inp.current.value)
          }}>Search</Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar