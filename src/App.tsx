import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './main/resources/app/views/auth/SignUp'
import Home from './main/resources/app/views/home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/views/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
