import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Import boxicons for icons
import SvgComponenta from '@/assets/Farmer';
import { Link, Routes, Route } from 'react-router-dom'; // Import necessary routing components

// Import your page components for each route
import Dashboard from '@/pages/Dashboard/Dashboard.jsx';
import Schemes from '@/pages/dashboardpages/Scheme.jsx';
import Irrigation from '@/pages/dashboardpages/Irrigation.jsx';
import HistoricalYield from '@/pages/dashboardpages/Historical.jsx';
import AISamadhaan from '@/pages/dashboardpages/Aisamadhan.jsx';
import Weather from '@/pages/dashboardpages/Weather.jsx';
import User from '@/pages/dashboardpages/User.jsx';
import CropDetails from '@/pages/dashboardpages/Pesticides.jsx';
import { useAppStore } from '@/store';

const Sidebar = () => {
  const { userInfo } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`sidebar bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`} style={{ backgroundColor: '#365170' }}>
        <div className="flex items-center justify-between pt-7 pb-0 pl-7 pr-7 ">
          {isOpen && <h1 className='flex items-center text-lg pl-7'>Farmingo</h1>}
          <i className="bx bx-menu text-2xl cursor-pointer" onClick={toggleSidebar}></i>
        </div>
        
        <ul className="mt-6">
          {['Dashboard', 'New Schemes', 'Irrigation Model', 'Historical Yield', 'AI Samadhaan', 'Weather', 'User','Pesticide'].map((item, index) => {
              const path = `${index === 0 ? 'dashboard' : index === 1 ? 'schemes' : index === 2 ? 'irrigation' : index === 3 ? 'historical' : index === 4 ? 'ai' : index === 5 ? 'weather' : index===6?'user':'pesticide'}`;

              return (
                <li key={index} className="flex items-center pt-7 pb-2 pl-7 pr-7 hover:bg-gray-700 cursor-pointer">
                  <Link to={`/${path}`} className="flex items-center">
                    <i className={`bx ${index === 0 ? 'bx-grid-alt' : index === 1 ? 'bx-bell' : index === 2 ? 'bx-chat' : index === 3 ? 'bx-news' : index === 4 ? 'bx-bot' : index === 5 ? 'bx-cloud' :index===6? 'bx-user':'bx-leaf'} text-xl`}></i>
                    {isOpen && <span className="ml-4">{item}</span>}
                  </Link>
                </li>
              );
          })}
          
        </ul>

        {/* Profile Section */}
        <div className="absolute bottom-0 w-full p-4">
          <div className="flex items-center">
            <SvgComponenta className="w-20 h-14 rounded-full " />
            {isOpen && <span className="ml-4">{userInfo.firstName + userInfo.lastName}</span>}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-5 pl-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/irrigation" element={<Irrigation />} />
            <Route path="/historical" element={<HistoricalYield />} />
            <Route path="/ai" element={<AISamadhaan />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/user" element={<User />} />
            <Route path="/pesticide" element={<CropDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
