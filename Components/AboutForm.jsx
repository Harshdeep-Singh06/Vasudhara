import React from 'react'
import ContactLeft from './ContactInfo'
import ContactForm from './ContactForm'

const AboutForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#2f3a2c] to-[#e8efe9] max-w-full mx-auto grid md:grid-cols-2 gap-20 justify-between items-start px-6 md:px-10 py-16 ">
        <ContactLeft/>
        <ContactForm/>
        </div>
  )
}

export default AboutForm