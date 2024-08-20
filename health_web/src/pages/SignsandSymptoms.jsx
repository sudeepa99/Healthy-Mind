import React from 'react';
import signsimg from "../assets/mental health 3.png"
import Navigation from '../components/Navigation';

export default function SignsandSymptoms() {
  const sign_list =["Persistent sadness","Feelings of guilt and hopelessness.","Loss of interest in activities one enjoyed e.g. hobbies.","Fatigue","Sudden loss or gain of appetite."];
  return (
    <div className='w-screen phone:h-auto bg-Background-blue laptop:h-screen tablet:h-auto tablet:pb-10 laptop:pb-10'>
      <Navigation/>
      <div className='flex flex-col mt-14 '>
        <h1 className='text-xl tracking-normal text-center text-white laptop:tracking-wide tablet:tracking-wide laptop:text-5xl tablet:text-3xl'>Signs and symptoms of depression</h1>
        <div className='flex flex-col items-center justify-center px-10 mt-16 gap-14 laptop:flex-row laptop:flex tablet:flex '>
          <img className='opacity-55 ' src={signsimg}></img>
          <div className='text-lg leading-6 tracking-normal text-white opacity-45 laptop:text-left laptop:text-xl laptop:leading-10 laptop:tracking-wide '>
            <ol  style={{listStyle:"upper-roman"}}>
            {sign_list.map((sign,index)=>(
              <li key={index}>{sign}</li>
            ))}
            </ol>
          </div>
        </div>
 
      </div>
      
    </div>
  )
}
