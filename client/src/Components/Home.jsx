import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='max-w-screen-xl mx-auto'>
        <nav className='grid grid-cols-3 bg-black text-white h-14'>
          <div className='flex justify-center items-center border-4 border-gray-400'>
            <Link to="/createusers">CreateUsers</Link>
          </div>
          <div className='flex justify-center items-center border-4 border-gray-400'>
            <Link to="/users">Users</Link>
          </div>
          <div className='flex justify-center items-center border-4 border-gray-400'>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </section>  
    </>
  );
};

export default Home;