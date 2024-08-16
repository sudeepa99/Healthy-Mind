import React from 'react'
import bodyimg from "../assets/Group.png"



export default function BodyPart() {
    
    const heading1="What is";
    const heading2="depression?";
  return (
    <div className="flex flex-row mx-10 mt-24 para text-amber-100">
        <div className='flex flex-col justify-start gap-4'>
            <h1 className='justify-start tracking-wider align-text-top text-8xl'>{heading1}</h1>
            <h2 className='tracking-wider text-8xl'>{heading2}</h2>
            <p className='mt-6 text-xl leading-8 tracking-wider text-justify letter'>Depression or ‘depressive disorder’ is a<br></br> mood disorder that causes distressing<br></br> symptoms that affect how you feel, think<br></br> and handle your daily activities.</p>
        </div>
        <div className='relative flex items-end justify-end before:absolute left-72 before:h-[400px] before:w-[400px] before:bg-custom-blue  before:rounded-tl-3xl before:rounded-tr-2xl before:rounded-bl-3xl before:rounded-xl '>
            <img className='z-10 w-80 h-80' src={bodyimg}></img>
        </div>
    </div>
  )
}
