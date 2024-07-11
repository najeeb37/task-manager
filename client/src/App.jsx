import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUsers from './Components/CreateUsers'
import Users from './Components/Users'

const App = () => {
  return (
    <div className=''>

      <BrowserRouter >
          <Home />
          
          <Routes>
              <Route element={<CreateUsers/>} path="/createusers"/>
              <Route element={<Users />} path="/users"/>
              {/* <Route element={<EditUsers />} path="/edit/:index"/> */}
          </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App