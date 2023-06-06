import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#16162c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p className=''>Hi, I'm Hans. Nice to meet you. Please take a look around</p>
                </div>
                <div>
                      <p>Throughout my academic journey, I have acquired strong analytical skills such as requirements gathering and analysis, process modelling, and data analysis. I have also developed a passion for problem-solving, critical thinking, and effective communication. I possess a wide range of technical skills, including programming languages such as C, Java, Kotlin, Swift, and more. Additionally, I have experience with Microsoft Office and have honed my skills in time-management, task-prioritising, and team leadership as a manager/owner of coffee shops. </p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
