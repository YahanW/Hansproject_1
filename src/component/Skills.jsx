import React from 'react';
import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import JavaScript from '../asset/javascript.png';
import ReactImg from '../asset/react.png';
import TailWind from '../asset/tailwind.png';
import GitHub from '../asset/github.png';

const Skills = () => {
  return (
      <div name='skills' className='w-full h-screen bg-[#16162c] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='ml-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-green-600'> // These are some coding languages I've worked with.</p>
            </div>
            {/* container for icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt='html icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={JavaScript} alt='html icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactImg} alt='html icon' />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={TailWind} alt='html icon' />
                    <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt='html icon' />
                    <p className='my-4'>GitHub</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Skills
