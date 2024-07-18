import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', formData);
      setToken(response.data.token);
      console.log('Login successful, token:', response.data.token);
    } catch (error) {
      console.error('There was an error logging in:', error);
    }
  };

  return (
    <div className='max-w-screen-lg mx-auto pt-10'>
      <h1 className='text-blue-800 p-10 font-sans font-bold text-4xl'>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4'
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4'
        />
        <br />
        <button type="submit" className='p-5 rounded-2xl bg-blue-500 text-white font-bold'>Login</button>
      </form>
      {token && <div>Token: {token}</div>}
    </div>
  );
};

export default Login;