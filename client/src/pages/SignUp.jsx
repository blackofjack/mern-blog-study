import React from 'react'
import { Link } from 'react-router-dom';
import { TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      
      <div className ="">
         <Link to="/"
        className=' font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            NoraSiri
          </span>
         Blog
      </Link>
      <p className = 'text-sm mt-5'>
        This is a demo project for a blog website. You can sign up to create an account and start writing your own blog posts. Enjoy your stay!
      </p>

      </div>

      {/* form here */}
        <div className =''>
            <form>
              <div className=''>
                  <label value="username">Your username</label>
                  <TextInput type='text' placeholder='Username' id='username' />
              </div>
              </form>  
        </div>
      </div>
    </div>
    
  )
}
