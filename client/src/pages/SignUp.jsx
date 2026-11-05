import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto'>
      </div>
      <div className ="">
         <Link to="/"
        className=' font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>
            NoraSiri
          </span>
         Blog
      </Link>
      <p className = 'text-sm mt-5'>
        This is a demo project for a blog website. You can sign up to create an account and start writing your own blog posts. Enjoy your stay!
      </p>




      </div>
      
    </div>
  )
}
