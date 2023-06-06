import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full h-screen bg-[#16162c] flex justify-center items-center p-4'>
          <form method='POST' action='https://getform.io/f/2c275de6-f52c-486c-979d-4d5faec3eccc' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='pt-4 text-green-600'>// Submit the from below or send me an email</p>
                <p className='pt-0 text-green-600'>// yahan.hans.wang@gmail.com</p>
            </div>
            <input placeholder='name' name='name' type="text" className='my-4 p-2 bg-[#ccd6f6]' />
            <input placeholder='Email' name='email' type="email" className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea placeholder='Message' name='message' rows='10' className='p-2 bg-[#ccd6f6]'/>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      
    </div>
  )
}

export default Contact
