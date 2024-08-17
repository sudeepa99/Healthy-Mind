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
    <div className='w-screen h-screen text-white bg-Background-blue'>
      <Navigation/>
      <div className='mt-14'>
        <h1 className='text-5xl text-center'>Treating depression</h1>
        <div className='grid grid-cols-3 gap-20 mx-8 mt-14'>
          {/* First Card */}
          <div className='items-center justify-center px-3 pt-4 h-96 bg-gradient-to-t from-custom-blue to-Background-blue' >
            <img className='items-center justify-center object-cover' src={img_med1} alt='medication'/>
            <h1 className='mt-4 text-lg text-center'>Medication</h1>
            <ol className='mt-2 leading-6'>
              {medi_list.map((medi,index)=>( 
                <li key={index}>{medi}</li>
              ))}
            </ol>
          </div >

          {/* Second Card */}
          <div className='flex flex-col items-center justify-center gap-8 px-3 text-center  h-96 bg-gradient-to-t from-custom-blue to-Background-blue'>
            <img className='items-center justify-center object-cover'  src={img_med2} alt='psycotherapy' />
            <h1 className='mt-4 text-lg text-center'>Psycotherapy</h1>
            <p className='mt-2 leading-6'>
            Psychotherapy is teaching new ways of thinking and behaving. It aims at changing habits that may cause depression. 
            </p>
          </div>

          {/* third card */}
          <div className='items-center justify-center gap-8 px-3 pt-5 text-center justify-items-center h-96 bg-gradient-to-t from-custom-blue to-Background-blue'>
            <img className='items-center justify-center object-cover'   src={img_med3} alt='Brain stimulation therapy'/>
            <h1 className='mt-4 text-lg text-center'>Brain stimulation therapy</h1>
            <p className='mt-3 leading-8 justify-items-end'>
            Brain stimulation therapies involve activating or inhibiting the brain directly with electricity. The electricity can be given directly by electrodes implanted in the brain, or noninvasively through electrodes placed on the scalp.
            </p>
          </div>


        </div>
      </div>
      
    </div>
  )
}
