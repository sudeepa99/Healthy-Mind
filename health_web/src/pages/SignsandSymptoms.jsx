import React from 'react';
import signsimg from "../assets/mental health 3.png"
import Navigation from '../components/Navigation';

export default function SignsandSymptoms() {
  const sign_list =["Persistent sadness","Feelings of guilt and hopelessness.","Loss of interest in activities one enjoyed e.g. hobbies.","Fatigue","Sudden loss or gain of appetite."];
  return (
    <div className='w-screen h-screen bg-Background-blue'>
      <Navigation/>
      <div className='flex flex-col mt-14'>
        <h1 className='text-5xl tracking-wide text-center text-white '>Signs and symptoms of depression</h1>
        <div className='flex flex-row content-center justify-center mt-16 gap-14'>
          <img className='opacity-55' src={signsimg}></img>
          <div className='pt-6 text-xl leading-10 tracking-wide text-white opacity-45'>
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
