import React from 'react'
import WorkImg from '../asset/firebase.png'
import EventEasy from '../asset/EE.png'
import Weather from '../asset/weather-icon-png-8.png'
import { useDispatch, useSelector } from 'react-redux'


const Work = () => {
    const { value } = useSelector((state) => state.sicko)
  return (
      <div name='work' className={value ? 'w-full md:h-screen text-black':'w-full md:h-screen text-gray-300 bg-[#16162c] '}>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6 text-green-600'>// Check out some of my work.</p>
            </div>

            {/* card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* card item */}
                <div 
                    style={{ backgroundImage: `url(${EventEasy})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* Hover effects */}
                    <div className='opcity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                              <a href='https://www.www.destinationtas.com.au/'>
                                <button className='text-center rounded-lg py-4 px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                    {/* end hover effect */}
                </div>
                {/* end card item  */}

                  {/* card item */}
                  <div
                      style={{ backgroundImage: `url(${Weather})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                      {/* Hover effects */}
                      <div className='opcity-0 group-hover:opacity-100 '>
                          <span className='text-2xl font-bold text-white tracking-wider'>
                             React X Tailwind
                          </span>
                          <div className='pt-8 text-center'>
                              <a href='https://hans-weather-app.vercel.app/'>
                                  <button className='text-center rounded-lg py-4 px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                              </a>
                              <a href='https://github.com/YahanW/hans-weather-app/tree/master'>
                                  <button className='text-center rounded-lg py-4 px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                              </a>
                          </div>
                      </div>
                      {/* end hover effect */}
                  </div>
                  {/* end card item  */}

                  {/* card item */}
                  <div
                      style={{ backgroundImage: `url(${WorkImg})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                      {/* Hover effects */}
                      <div className='opcity-0 group-hover:opacity-100 '>
                          <span className='text-2xl font-bold text-white tracking-wider'>
                              iOS Application coming soon
                          </span>
                          <div className='pt-8 text-center'>
                              {/* <a href=''>
                                  <button className='text-center rounded-lg py-4 px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                              </a>
                              <a href=''>
                                  <button className='text-center rounded-lg py-4 px-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                              </a> */}
                          </div>
                      </div>
                      {/* end hover effect */}
                  </div>
                  {/* end card item  */}

            </div>
            {/* end card container */}
        </div>
      
    </div>
  )
}

export default Work
