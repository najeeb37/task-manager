import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import RegisterUser from './Components/RegisterUser';
import Users from './Components/Users';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route element={<RegisterUser />} path="/createusers" />
          <Route element={<Users />} path="/users" />
          <Route element={<Login />} path="/login" />
          {/* <Route element={<EditUsers />} path="/edit/:index" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;