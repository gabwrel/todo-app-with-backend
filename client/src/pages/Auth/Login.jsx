import React from 'react';
import loginIcon from '../../assets/login_icon.svg';
import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../../services/authServices';
import { getErrorMessage } from '../../util/GetError';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = {
        username,
        password
      };
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem('toDoAppUser', JSON.stringify(response.data));
      message.success("User Logged in Successfully");
      navigate('/to-do-list');
      setLoading(false);
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err));
      setLoading(false);
    }
  }

  return (
    <div className='flex justify-center text-center'>
      <div className='w-screen sm:w-1/2 bg-slate-400 p-4 h-screen rounded flex flex-col items-center'>
        <img src={loginIcon} alt="login" className='w-64' />
        <h4 className='text-white text-xl font-bold mt-4'>Login</h4>
        <div className='flex flex-col gap-2 mt-6'>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5 className='text-white text-md my-2 mb-2'>
            New User? <Link to="/register" className='hover:underline hover:text-black'>Register</Link>
          </h5>
        </div>
        <Button
          loading={loading}
          type="primary"
          size='large'
          disabled={!username || !password}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
