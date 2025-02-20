import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { getUserDetails } from '../util/GetUser';
import { Dropdown } from 'antd';


function Navbar({active}) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const Navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const userDetails = getUserDetails;
    setUser(userDetails);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('toDoAppUser');
    Navigate('/login');
  }

  const items = [
    {
      key: '1',
      label: (
        <span onClick={handleLogout}>Logout</span>
      )
    },
    {
      key: '2',
      label: (
        <span onClick={handleLogout}></span>
      )
    },
  ];

  return (

    <header className='fixed w-full top-0 z-50'>
      <nav className="bg-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 sm:px-20">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-12" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">MGA GAGAWIN</span>
          </a>
          <button 
            onClick={toggleNavbar} 
            data-collapse-toggle="navbar-solid-bg" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-solid-bg" 
            aria-expanded={isOpen}
          >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
              </li>
              {user && <li><Link to="/to-do-list" className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' >My Tasks</Link></li>}
              {user ? 
              <Dropdown menu={{items,}} placement="bottom" arrow>
                <div className='flex items-center gap-2'>
                  <img src={logo} alt="logo" className='w-8'/>
                  <span>Welcome <strong className='uppercase'>{user?.firstName ? `${user?.firstName} ${user?.lastName}` :  user?.username}</strong>!</span>
                </div> 
              </Dropdown>
              
              : <>
              <li>
                <Link to="/login" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
              </li>
              <li>
                <Link to="/register" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</Link>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
