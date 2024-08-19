import React from 'react';
import img_dep from '../assets/undraw_hang_out_h9ud 1.png'
import img_dep2 from '../assets/undraw_friendship_under_tree 1.png'
import Navigation from '../components/Navigation';

export default function HandlingDepression() {

  const depress_list = ["Try to be active and exercise.", "Break large tasks into small ones.", "Set priorities.","Spend time with friends and family."];
  const depress_list2 = ["Offer support and patience.","Invite him/her to outdoor activities e.g. walks.","Remind him about his medication frequently.","Encourage them that with time and treatment, depression will lift."]
  return (
    <div className='w-auto h-auto text-white bg-Background-blue '>
      <Navigation/>
      <div className='ml-20 text-center mt-14'>
        <h1 className='text-5xl tracking-wider'>Handling Depression</h1>
        <div className='flex flex-row mt-12'>
          <img src={img_dep} alt='depression'/>
          <div className='flex flex-col pl-16 mt-10 leading-loose text-start'>
          <h1 className='text-4xl tracking-widest'>How can I help myself?</h1>
          <ol className='pt-8 pl-6 text-xl leading-loose tracking-wider' style={{listStyle:"upper-roman"}}>
            {depress_list.map((depress,index)=>(
              <li key={index}>{depress}</li>
            ))}
          </ol>

        </div>

        </div>
        <div className='flex flex-row mt-8 '>
          <div className='flex flex-col pl-8 mt-10 leading-8 text-left'>
            <h1 className='text-4xl tracking-widest'>How can I help others?</h1>
            <ol className='pt-8 pl-6 text-xl leading-loose tracking-wider' style={{listStyle:"upper-roman"}}>
            {depress_list2.map((depress2,index)=>(
              <li key={index}>{depress2}</li>
            ))}
            </ol>

          </div>
          
          <img className='pl-16' src={img_dep2} alt='depression2'/>
        </div>
        

      </div>
      
    </div>
  )
}
