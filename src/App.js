import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from './Login';
// import Signup from './Signup';
import Restraunt from './Restraunt';
import './style.css';
import Homepage from './Homepage';
import Signup from './Signup';

function App()  {
  return (
  <>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Restraunt />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
     
   
    </>
  );
}

export default App;