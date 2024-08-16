import React from 'react'
import Navigation from '../components/Navigation'
import BodyPart from '../components/BodyPart'



export default function Homepage() {
  return (
    <div className='w-screen h-screen bg-Background-blue'>
      <Navigation/>
      <BodyPart/>
    </div>
  )
}
