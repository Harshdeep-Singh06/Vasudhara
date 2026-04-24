import React, { useRef } from 'react'



const AboutCards2 = () => {
  return (
    
    <div className=' pb-16 pt-6 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#2f3a2c] to-[#e8efe9]]'>
        
        <div className='w-full lg:w-1/3 flex justify-center flex-col'>
        <div className='p-6'>
        <h3 className='mt-10 leading-tight text-4xl  lg:text-6xl font-bold text-white lg:text-black'>
            The Faces <br/> <span className='text-green-950'>  Behind </span> <br/>Our Mission </h3>
        </div>
        </div>
        <div id='right'
             className='w-full flex flex-nowrap gap-6 lg:w-2/3 p-4 lg:p-6 overflow-x-auto scroll-smooth'>
        <div className='lg:h-full mt-6 lg:mt-10 sm:w-72 w-64 lg:w-78 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl '>
            <img className='h-full w-full object-cover' src="/ceo1.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300  '>
                    Shri. Vivaan Karani <br/>
                    CEO
                </p>
            </div>
            
        </div>
        
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-2.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                    Mr. Aakash Paartap Singh
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-3.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                    Mr.Ramakant Singru
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full  object-cover' src="/mr-4.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                   Dr.Brij Kishor Gupta
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-5.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                   Mr.Akshay Shah
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-6.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                   Mr.Bharat Singh
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-7.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300'>
                  Mr.Neeraj Sangwan
                </p>
            </div>
        </div>
        <div className='lg:h-full mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-8.jpg" alt="" />

            <div className='absolute top-0 left-0 p-4 flex flex-col justify-between h-full w-full'>
                <p className='text-sm sm:text-base lg:text-xl font-serif leading-relaxed text-gray-300 '>
                   Mr.Nobita Kumar
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutCards2