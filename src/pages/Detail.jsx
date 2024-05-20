import { getData } from '@/services/api/queries'
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { IoIosCalendar } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from '@/common/components/ui/button';
const Detail = () => {
  const {id}=useParams()
  const {data}=useSWR(`/career/vacancy/${id}/`,getData)
  if (!data) {
    // Data is still loading or fetching failed
    return <p>Loading...</p>; // Or you can handle error state here
  }

  return (
    <>
  
   <section >
    <div className=' ml-[160px] mt-20'>
      <h1 className='text-[#F8981F] font-secondfont text-[24px]'>{data.category} ({data.min_salary}$)</h1>
    </div>
    <div className='flex mx-40 mt-7'>
      <div className='w-3/4 border bg-[#F0F2F3] rounded-[7px] mb-6'>
        <div>
         <div className='w-[200px] mt-7'>
         <span className='ml-5 text-[18px] text-[#1F3751] font-secondfont font-bold'>You Tasks:</span>
         </div>
          <ul className='list-disc ml-8 mt-5 text-[#1F3751] font-secondfont text-[16px] font-medium leading-9'>
            <li>Analysis, interpretation and reporting of the performance versus budgets and previous periods' results</li>
            <li>Budgeting and controlling of operational and management activities in close cooperation with other business units</li>
            <li>Joint preparation and provision of cross-departmental management reports, variance analyses and ad- hoc reports</li>
            <li>Gap analysis of existing Bl solution vs. current and future business needs</li>
            <li>Design, develop, test, and deploy reporting & analytics solutions, based on Microsoft's Power Bl Platform</li>
            <li>Develop interactive visual reports and dashboards</li>
            <li>Create documentation and training materials, support & train end users</li>
          </ul>
        </div>
        <div>
         <div className='w-[200px] mt-7'>
         <span className='ml-5 text-[18px] text-[#1F3751] font-secondfont font-bold'>Requirements:</span>
         </div>
          <ul className='list-disc ml-8 mt-5 text-[#1F3751] font-secondfont text-[16px] font-medium leading-9'>
            <li>Experience with development based on Microsoft’s Power Bl Platform</li>
            <li>Experience with SAP Business Warehouse (SAP BWJ)</li>
            <li>Strong analytical and conceptual skills</li>
            <li>SQL knowledge and ability to query and manipulate datasets</li>
            <li>Systematic, proactive and independent way of working</li>
            <li>Background in finance, controlling or real estate is an advantage</li>
            <li>Good written and verbal English proficiency. German is a plus</li>
          </ul>
        </div>
        <div>
         <div className='w-[200px] mt-7'>
         <span className='ml-5 text-[18px] text-[#1F3751] font-secondfont font-bold'>Your Perspective:</span>
         </div>
          <ul className='list-disc ml-8 mt-5 text-[#1F3751] font-secondfont text-[16px] font-medium leading-9'>
            <li>An interesting, varied and broad range of tasks awaits you in one of the largest real estate companies in Germany</li>
            <li>We offer a pleasant working atmosphere in an environment with flat hierarchies where your commitment is valued</li>
            <li>You will work in a committed and passionate team with high professional competence</li>
            <li>You benefit from flexible working hours and home office options</li>
            <li>Our Academy offers you individual training for your professional and personal development</li>
            <li>In addition to the usual drinks, you will have a selection of free fruit at your disposal</li>
            <li>You will also be supported with employee discounts and a company pension scheme</li>
          </ul>
        </div>
      </div>
      <div className='w-2/4 h-[401px] border ml-6 bg-[#F0F2F3] rounded-[7px]'>
        <div className=' flex w-[316px] h-[47px] gap-[22px] mt-5 ml-2'>
          <div className=' w-1/2 flex ml-5'>
            <IoIosCalendar className='text-[#F9A220]' size={25} />
           <div className='ml-3 w-full leading-6'>
           <span className='text-[16px] text-[#1F3751] font-secondfont font-medium '>Posting date:</span>
            <p className='text-[#F9A220] text-[16px] font-secondfont'>{data.posting_date}</p>
           </div>
          </div>
          <div className=' w-1/2'>
          <div className='ml-3 w-full leading-6'>
           <span className='text-[16px] text-[#1F3751] font-secondfont font-medium '>Expiration date:</span>
            <p className='text-[#F9A220] text-[16px] font-secondfont'>{data.expression_date}</p>
           </div>
          </div>
        </div>
        <div className='flex ml-6 mt-5'>
          <IoMdEye className='text-[#F9A220]' size={25} />
          <div className='ml-3 w-full leading-6'>
           <span className='text-[16px] text-[#1F3751] font-secondfont font-medium '>Number of views:</span>
          <p className='text-[#F9A220] text-[16px] font-secondfont'>127</p>
           </div>
        </div>
        <div className='flex ml-6 mt-5'>
        <IoPersonOutline className='text-[#F9A220]' size={25} />
          <div className='ml-3 w-full leading-6'>
           <span className='text-[16px] text-[#1F3751] font-secondfont font-medium '>Number of applicants:</span>
            <p className='text-[#F9A220] text-[16px] font-secondfont'>172</p>
           </div>
        </div>
        <div className='flex ml-6 mt-5'>
        <MdOutlineEmail className='text-[#F9A220]' size={25} />
          <div className='ml-3 w-full leading-6'>
           <span className='text-[16px] text-[#1F3751] font-secondfont font-medium '>Email adress:</span>
            <p className='text-[#F9A220] text-[16px] font-secondfont'>{data.email_address}</p>
           </div>
        </div>
        <Button variant="apply" size="apeal">Appeal</Button>
     </div>
    </div>

   </section>
    
    </>
  )
}

export default Detail