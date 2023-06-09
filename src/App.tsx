import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './main/resources/app/views/auth/SignUp'
import Home from './main/resources/app/views/home/Home'
import "../src/main/resources/app/styles/index.scss";
import Login from './main/resources/app/views/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/views/login" element={<Login />} />
        <Route path="/views/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
