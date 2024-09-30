import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import Profile from './pages/profile'
import Dashboard from './pages/Dashboard/Dashboard'
import Schemes from './pages/dashboardpages/Scheme'
import Irrigation from './pages/dashboardpages/Irrigation'
import HistoricalYield from '@/pages/dashboardpages/Historical';
import AISamadhaan from '@/pages/dashboardpages/Aisamadhan';
import Weather from '@/pages/dashboardpages/Weather';
import User from '@/pages/dashboardpages/User';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path='*' element={<Navigate to="auth"/>}/>
    <Route path ="/dashboard" element={< Dashboard/>}/>
    <Route path="/schemes" element={<Schemes/>}/>
    <Route path="/irrigation" element={<Irrigation/>}/>
    <Route path="/historical" element={<HistoricalYield/>} />
    <Route path="/ai" element={<AISamadhaan/>} />
    <Route path="/weather" element={<Weather/>} />
    <Route path="/user" element={<User/>} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App