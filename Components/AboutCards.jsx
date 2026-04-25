import React from 'react'

const AboutCards = () => {
  return (
    // Debugging try 1
    <div className='bg-gradient-to-b from-[#efe3cc] via-[#e2c89f] to-[#eadcbf] py-16 px-6 pb-20 lg:pb-30'>
        <h1 className='text-3xl md:text-6xl font-serif text-center text-[#8a765d]'>
            Facilities to Nurture and Care 
        </h1>
        <div className='flex gap-6 flex-wrap justify-center items-stretch mt-10 lg:mt-25'>
            <div className='flex flex-col w-full   sm:w-[47%] lg:w-[23%] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl '>
                <img src="/card-1.avif" alt="" className='w-full   aspect-[4/3] object-cover'/>
                <div className='p-6 flex flex-col flex-grow min-h-[200px] '>
                    <p className='text-xs font-bold mb-2 uppercase text-[#8a765d]'>Qurantine units</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed text-[#26351f]'>Provinding dedicated care and monitoring for all arriving animals, ensuring their health and seamless integration into their new environment.</p>
                </div>
            </div>
            <div className='flex flex-col w-full  sm:w-[47%] lg:w-[23%]   rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl '>
                <img src="/card-2.jpg" alt="" className='w-full  aspect-[4/3] object-cover'/>
                <div className=' p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold mb-2 uppercase text-[#8a765d]'>Advanced Wildlife imagine centre</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed text-[#26351f]'>Vasudhara's  Advanced Wildlife Imaging Centre provides state-of-the-art radiography, ultrasound, CT, and MRI for precise, stress-free wildlife diagnostics.</p>
                </div>
            </div>
            <div className='sm:w-[47%] lg:w-[23%]  w-full rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-3.avif" alt="" className='w-full  aspect-[4/3]  object-cover'/>
                <div className=' p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold  mb-2 uppercase text-[#8a765d]'>sterilisation service department</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed text-[#26351f]'>One of the first veterinary care centres in the country to have a CSSD Mega Unit</p>
                </div>
            </div>
            <div className='sm:w-[47%] lg:w-[23%]  w-full rounded-xl overflow-hidden flex-col flex hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-4.avif" alt="" className='w-full aspect-[4/3]  object-cover'/>
                <div className='p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold  mb-2 uppercase text-[#8a765d]'>Animal dentistry </p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed text-[#26351f]'>We prioritise animal comfort through, pain-free and stress-free dental procedures</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCards