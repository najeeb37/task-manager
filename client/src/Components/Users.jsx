import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='pt-10 max-w-screen-xl mx-auto'>
      <h1 className='text-center text-blue-900 font-bold text-5xl pb-10'>Users</h1>
      <ul className='bg-yellow-500 bg-opacity-20 py-5'>
        <li className='grid grid-cols-5 text-2xl font-bold py-5'>
          <div className='flex justify-center items-center '>Id</div>
          <div className='flex justify-center items-center '>Name</div>
          <div className='flex justify-center items-center '>Email</div>
          <div className='flex justify-center items-center '>Password</div>
          <div className='flex justify-center items-center '>Phone</div>
        </li>

        {data.map(item => (
          <li key={item.user_id} className='grid grid-cols-5 py-2'>
            <div className='flex justify-center items-center '>{item.user_id}</div>
            <div className='flex justify-center items-center '>{item.first_name} {item.last_name}</div>
            <div className='flex justify-center items-center '> {item.email}</div> 
            <div className='flex justify-center items-center overflow-hidden'>{item.password}</div>
            <div className='flex justify-center items-center '> {item.phone}</div>
          
          </li>
        ))}

      </ul>  
    </div>
  )
}

export default Users