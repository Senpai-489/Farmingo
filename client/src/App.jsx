import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import Profile from './pages/profile'
import Landing from './pages/Landing/Landing'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path='*' element={<Navigate to="auth"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App