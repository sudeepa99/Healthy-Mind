import React from 'react'
import causimg from "../assets/mental health4.png"
import Navigation from '../components/Navigation';

export default function CausesofDepression() {

  const causes_list =["Early childhood trauma.","Severe illness e.g. heart disease.","Drug abuse.","Family history."];
  return (
    <div className=' bg-Background-blue'>
    <Navigation/>
     <div className='flex flex-col w-screen text-white mt-14 laptop:h-screen tablet:h-auto phone:h-auto'>
      <h1 className='text-xl tracking-normal text-center tablet:text-3xl laptop:text-5xl '>Causes of depression</h1>
      <div className='flex flex-col gap-4 px-10 mt-16 tablet:gap-8 tablet:mt-10 laptop:flex laptop:flex-row laptop:gap-16 laptop:ml-52 laptop:mt-16'>
        <div className="flex items-center justify-center ">
          <img src={causimg}/>
        </div>
        <div className='pl-8 mx-10 text-lg leading-8 tracking-wide tablet:flex tablet:text-left phone:justify-center tablet:items-center phone:ml-0 phone:items-center tablet:ml-0 laptop:leading-10 laptop:text-xl laptop:tracking-wide '>
          <ol style={{listStyle:"upper-roman"}}>
          {causes_list.map((cause,index)=>(
              <li key={index}>{cause}</li>
            ))}
          </ol>
        </div>
      </div>
      
    </div>
    </div>
   
  )
}
