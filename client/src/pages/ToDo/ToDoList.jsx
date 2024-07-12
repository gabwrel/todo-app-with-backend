import React from 'react'
import { useLocation } from 'react-router'

function ToDoList() {
  const location = useLocation();
  const {state} = location; 
  const pityniOwie = JSON.parse(state);
  return (
    <>
    <div className='flex justify-center items-center'>
      <div className='md:max-w-5xl w-full h-screen p-4 bg-slate-50'>
        <div className='flex justify-between items-center'>
          <div className='text-3xl'>To do list ni <strong className='uppercase'>{pityniOwie.username}</strong></div>
          <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Add Task</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default ToDoList