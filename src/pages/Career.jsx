"use client"
import { getData } from '@/services/api/queries'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import Jobs from "../assets/Jobs.png"
import Navbar from '@/common/components/Navbar'
const Career = () => {
  const [search,setSearch]=useState([])
    const {data}=useSWR("/career/vacancy/",getData)
    
  return (
    <>
     <Navbar setSearch={setSearch} />
    <section className=' w-full  flex items-center justify-center gap-2'>
        
{/* <div className='w-[1120px]  mt-[50px] mb-[50px] flex flex-wrap xl:w-[] gap-[17px] justify-between'> */}
<div className='mt-[50px] mb-[50px] flex justify-center flex-wrap gap-[17px]'>

   {
    data? (data.filter((product)=>product.header.includes(search)).map((item)=>{
      return(
       <Link to={`/${item.id}`}>
        <div className='w-[400px] md:w-[450px] h-[106px] border rounded-[7px] relative'>
        <hr className='rotate-90 w-[52px] border-[#F9A820] border-[2px]  absolute left-[-10px] top-[40px]'/>
        <span className='absolute top-4 left-7 text-[18px] text-[#355474] font-secondfont font-medium'>{item.category}<span className='text-[#2EC33D] font-secondfont text-[16px] ml-[10px]'>{item.min_salary}$</span></span>
        <span className='absolute top-10 left-7 text-[#355474] font-secondfont text-[16px]'>{item.header}</span>
        <span className='absolute top-16 left-7 text-[#909398] text-[16px] font-secondfont font-medium'>{item.job_type}</span>
        <span className='absolute top-20 right-2 text-[#909398] leading-5'>{item.posting_date}</span>
     </div>
       </Link>
      )
    })):(
      <p>Loading...</p>
    )
   }
</div>
<Link to="/addform"><img className=' fixed bottom-20 right-10'  src={Jobs} alt="" /></Link>
    </section>
    
    </>
  )
}

export default Career