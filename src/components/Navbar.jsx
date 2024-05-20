import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import DataPark from "../assets/Group.png"

import { Button } from './ui/button'
import { Input } from './ui/input'
import { IoIosSearch } from 'react-icons/io'
const Navbar = ({setSearch}) => {
  let inp=useRef("")
  return (
    <>
    
    

<nav className="bg-[#071522]  w-full  ">
  <div className="max-w-screen-xl flex flex-wrap items-end justify-around mx-auto p-4">
      <img src={DataPark} className='w-[125px] h-[30px]' alt="" />
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <Button variant="login">Login</Button>
     <Button>Sign Up</Button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-customfont border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#071522] text-[#C3C3C3] text-[16px]">
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
  </div>
</nav>
<div className='w-full  h-[212px] bg-[#081623] flex items-center justify-center'>
<div className='w-[1120px] h-[132px] bg-[#081623] flex flex-col justify-between'>
    <h1 className='text-[#F7941E] font-secondfont text-[25px] font-medium leading-9'>Search Vacancy</h1>
    <div className=' w-[950px] h-[46px] relative flex justify-between'>
    <IoIosSearch  className="absolute text-[#B1B9C2] top-3 left-3" size={20}/> <Input  placeholder="Write the name of the vacancy.." ref={inp}/>
      <Button  size="search" onClick={()=>{
         setSearch(inp.current.value)
      }}>Search</Button>
    </div>
</div>
</div>

    
    </>
  )
}

export default Navbar