import React from 'react'
import loginIcon from '../../assets/login_icon.svg';
import {Button, Input} from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Logged In")
  }

  return (
    <div className='flex justify-center text-center'>
      <div className='w-screen sm:w-1/2 bg-slate-400 p-4 h-screen rounded flex flex-col items-center'>
        <img src={loginIcon} alt="login" className='w-64'/>
        <h4 className='text-white text-xl font-bold mt-4'>Login</h4>
        <div className='flex flex-col gap-2 mt-6'>
          <Input placeholder="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}></Input>
          <Input.Password placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}></Input.Password>
          <h5 className='text-white text-md my-2 mb-2'>New User? <Link to = "/register" className='hover:underline hover:text-black'>Register</Link></h5>
        </div>
        <Button type="primary" size='large' disabled={!username || !password} onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login