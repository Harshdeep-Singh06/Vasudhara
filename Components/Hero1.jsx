import React from 'react'
import Navbar from './Navbar'

function Hero1() {
  return (
    <>
      <div className='min-h-screen'>
        <Navbar />
        <div className='text-xl font-bold pl-4 absolute bottom-20'>
          <p>Vantara launches </p>
          <p>World's First Global</p>
          <p>University for Wildlife</p>
          <p> and Veterinary Services.</p>
        </div>
      </div>
    </>
  )
}

export default Hero1