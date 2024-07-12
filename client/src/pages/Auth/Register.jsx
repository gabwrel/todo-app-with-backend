import React from 'react'
import loginIcon from '../../assets/login_icon.svg';
import {Button, Input, message} from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../util/GetError';
import AuthServices from '../../services/authServices';



function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try{
      const data = {
        firstName,
        lastName,
        username,
        password
      }
      const response = await AuthServices.registerUser(data);
      console.log(response.data)
      setLoading(false);
      message.success("You're registered succesfully");
      navigate('/login');
    }catch(err){
      console.log(err);
      message.error(getErrorMessage(err))
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center text-center'>
      <div className='w-screen sm:w-1/2 bg-slate-400 p-4 h-screen rounded flex flex-col items-center'>
        <img src={loginIcon} alt="login" className='w-64' />
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
        <Button loading={loading} type="primary" size='large' disabled={!username || !password || !firstName || !lastName} onClick={handleSubmit}>
          Register
        </Button>
      </div>
    </div>
  )
}

export default Register