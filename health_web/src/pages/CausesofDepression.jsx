import React from 'react'
import causimg from "../assets/mental health4.png"
import Navigation from '../components/Navigation';

export default function CausesofDepression() {

  const causes_list =["Early childhood trauma.","Severe illness e.g. heart disease.","Drug abuse.","Family history."];
  return (
    <div className='bg-Background-blue'>
    <Navigation/>
     <div className='flex flex-col w-screen h-screen text-white mt-14'>
      <h1 className='text-5xl tracking-wide text-center'>Causes of depression</h1>
      <div className='flex flex-row gap-16 mt-16 ml-52'>
        <img src={causimg}/>
        <div className='text-xl leading-10 tracking-wide '>
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
