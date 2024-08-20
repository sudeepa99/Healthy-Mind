import React from 'react'
import Navigation from '../components/Navigation'
import img_med3 from '../assets/brain-electricity-svgrepo-com 1.png';
import img_med2 from '../assets/undraw_conversation_h12g 2.png'
import img_med1 from '../assets/medicine-svgrepo-com 1.png'

export default function TreatmentMethods() {

  const medi_list =["Anti-depressants could be used.",
  "Take 2 ~ 4 weeks to work.",
  "Should only be taken under prescription of a health officer.",
  "Patients taking medication should be monitored closely."
];
  return (
    <div className='w-screen h-screen text-white bg-Background-blue laptop:h-screen tablet:h-screen'>
      <Navigation/>
      <div className='pb-16 mt-14 tablet:pb-16 bg-Background-blue'>
        <h1 className='text-2xl text-center laptop:text-5xl tablet:text-4xl'>Treating depression</h1>
        <div className='grid grid-cols-1 gap-20 px-10 mx-8 mt-14 laptop:grid-cols-3 laptop:px-0 tablet:grid-cols-2 tablet:px-0'>
          {/* First Card */}
          <div className='flex flex-col items-center justify-center px-3 pt-4 rounded-lg h-96 bg-gradient-to-b from-custom-blue to-Background-blue' >
            <img className='items-center justify-center object-cover' src={img_med1} alt='medication'/>
            <h1 className='mt-4 text-xl text-center'>Medication</h1>
            <ol className='mt-2 leading-6'>
              {medi_list.map((medi,index)=>( 
                <li key={index}>{medi}</li>
              ))}
            </ol>
          </div >

          {/* Second Card */}
          <div className='flex flex-col items-center justify-center px-3 text-center rounded-lg h-96 bg-gradient-to-t from-custom-blue to-Background-blue'>
            <img className='items-center justify-center object-cover'  src={img_med2} alt='psycotherapy' />
            <h1 className='mt-2 text-xl text-center'>Psycotherapy</h1>
            <p className='mt-2 leading-6 text-justify'>
            Psychotherapy is teaching new ways of thinking and behaving. It aims at changing habits that may cause depression. 
            </p>
          </div>

          {/* third card */}
          <div className='flex flex-col items-center justify-center px-3 pt-5 text-center rounded-lg justify-items-center h-96 bg-gradient-to-b from-custom-blue to-Background-blue'>
            <img className='items-center justify-center object-cover '   src={img_med3} alt='Brain stimulation therapy'/>
            <h1 className='mt-4 text-xl text-center'>Brain stimulation therapy</h1>
            <p className='mt-3 leading-6 text-justify'>
            Brain stimulation therapies involve activating or inhibiting the brain directly with electricity. The electricity can be given directly by electrodes implanted in the brain, or noninvasively through electrodes placed on the scalp.
            </p>
          </div>


        </div>
      </div>
      
    </div>
  )
}
