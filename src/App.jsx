/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className='bg-blue-900 h-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
