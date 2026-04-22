import React from 'react'
import Navbar from '../components/Navbar'
import ContactContent from '../components/ContactHeading'
import LeftContactContent from '../components/ContactInfo'
import RightContactContext from '../components/ContactForm'
import ContactFAQ from '../components/ContactFAQ'
import ContactFooter from '../components/ContactFooter'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#f5f2ed] via-[#e9e4d9] to-[#dcd6c8]'>

      <Navbar />
      <ContactContent/>  
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-20 justify-between items-start px-6 md:px-10 py-16">
      <LeftContactContent />
      <RightContactContext />
</div>   
      <ContactFAQ/>
      <ContactFooter/>

    </div>
  )
}

export default Contact