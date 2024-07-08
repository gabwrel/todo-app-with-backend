import React from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import hero from '../../assets/Hero.png';


function Landing() {
  return (
    <div>
        <Navbar/>
        <section className='h-svh w-svw flex flex-col mt-20 sm:flex-row sm:mt-0 sm:px-20'>
          <div className='w-full sm:w-1/2 h-full flex flex-col p-4 justify-center'>
            <h1 className='font-extrabold text-4xl sm:text-7xl'>Welcome to JGD's To Do List App</h1>
            <div className='mt-12'>
              <Link to="/register" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-4 me-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                Register
              </Link>
              <Link to="/login" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-8 py-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                Login
              </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 h-full flex flex-col p-4 justify-center'>
            <img src={hero} alt="hero" />
          </div>
        </section>
    </div>
  )
}

export default Landing