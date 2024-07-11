import axios from 'axios';
import React, { useState } from 'react'

const initialFormData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: ''
}

const CreateUsers = () => {

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/adduser', formData); 
      console.log('Data added:', response.data);
      setFormData(initialFormData)
    } catch (error) {
      console.error('There was an error adding the data!', error);
    }
  };

  // console.log(formData);

  return (
    <div className='max-w-screen-lg mx-auto pt-10'>
      <h1 className='text-blue-800 p-10 font-sans font-bold text-4xl'>Create User</h1>

      <form onSubmit={handleSubmit}>
        <label className=''>First Name : </label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4' />
        <br />
        <label className=''>Last Name : </label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4' />
        <br />
        <label className=''>Email : </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4' />
        <br />
        <label className=''>Password : </label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} required className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4' />
        <br />
        <label className=''>Phone : </label>
        <input type="number" name="phone" value={formData.phone} onChange={handleChange} required className='my-2.5 py-2 pr-4 border-2 border-black ml-4 pl-4' />
        <br />
        <button type="submit" className='p-5 rounded-2xl bg-blue-500 text-white font-bold'>Add Data</button>
      </form>


    </div>
  )
}

export default CreateUsers