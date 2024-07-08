import React from 'react'
import loginIcon from '../../assets/login_icon.svg';
import {Button, Input} from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    console.log("Logged In")
  }

  return (
    <div className='flex justify-center text-center'>
      <div className='w-screen sm:w-1/2 bg-slate-400 p-4 h-screen rounded'>
        <img src={loginIcon} alt="login" />
        <h4 className='text-white text-xl font-bold mt-4'>Register</h4>
        <div className='flex flex-col gap-2 mt-6'>
        <Input placeholder="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}></Input>
          <Input.Password placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}></Input.Password>
          <div className='flex flex-row gap-2'>
          <Input placeholder="First Name" 
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}></Input>
          <Input placeholder="Last Name" 
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}></Input>
          </div>
          <h5 className='text-white text-md my-2 mb-2'>Already have an account? <Link to = "/login" className='hover:underline hover:text-black'>Login</Link></h5>
        </div>
        <Button type="primary" size='large' disabled={!username || !password || !firstName || !lastName} onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Register