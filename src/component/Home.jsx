import React, { useState } from 'react'
import {HiAcademicCap, HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const { value } = useSelector((state) => state.sicko)

  //bg-[#16162c]
  return (
    <div name='home' className={value ? 'w-full h-screen' : 'w-full h-screen bg-[#16162c]'}>


        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>

        {/* spinning snowflake */}

          <p className='text-3xl text-pink-600'>Hi, my name is</p>
          <h1 className={value?'text-4xl sm:text-6xl font-bold text-[#212c51]':
          'text-4xl sm:text-6xl font-bold text-[#ccd6f6]' }>Yahan Wang (AKA Hans)</h1>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Bachelor of ICT major in Software Development. </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Graduate Developer specializing in building exceptional digital experiences. Currently, I'm Focused on building responsive full-stack web applications.</p>
          <div>
          <Link to="work" smooth={true} duration={500}>
            <button className={value?
              'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 bg-[#82bfee]' :
              'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '} >View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
          </div>
        </div>

      
    </div>
  )
}

export default Home
