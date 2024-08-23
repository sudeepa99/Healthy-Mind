import React from 'react'
import Navigation from '../components/Navigation'

export default function TypesofDepression() {
  return (
    <div className='bg-Background-blue' >
      <Navigation/>
      <div className='w-auto h-screen text-white mt-14'>
        <h1 className='text-5xl tracking-widest text-center'>Types of Depression</h1>
          <div className='flex flex-row gap-16 pt-14 px-96'>
            <p className='pt-0 text-opacity-55 text-8xl'>01</p>
              <div className='flex flex-col justify-start text-left align-top'>
                <p className='pt-2 text-2xl tracking-wider text-left'>Major Depression</p>
                <p className='text-xl leading-7 tracking-wide'>A type of depression where symptoms occur nearly every day for at least two weeks.</p>
              </div>
            
          </div>

          <div className='flex flex-row gap-16 pt-14 px-96'>
            <p className='pt-0 text-opacity-55 text-8xl'>02</p>
            <div className='flex flex-col justify-start text-left align-top'>
              <p className='pt-2 text-2xl tracking-wider text-left'>Persistent depression</p>
              <p className='text-xl leading-7 tracking-wide'>A type of depression where symptoms occur for at least two years.</p>
            </div>

          </div>
      </div>
    </div>
  )
}
