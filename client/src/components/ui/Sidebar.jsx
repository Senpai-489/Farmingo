


import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Import boxicons for icons
import SvgComponenta from '@/assets/Farmer';
import { Link, Routes, Route } from 'react-router-dom'; // Import necessary routing components

// Import your page components for each route
import Dashboard from '@/pages/Dashboard/Dashboard';// Assuming you have this component
import Schemes from '@/pages/dashboardpages/Scheme'; // Assuming you have this component
import Irrigation from '@/pages/dashboardpages/Irrigation'; // Assuming you have this component
import HistoricalYield from '@/pages/dashboardpages/Historical';
import AISamadhaan from '@/pages/dashboardpages/Aisamadhan';
import Weather from '@/pages/dashboardpages/Weather';
import User from '@/pages/dashboardpages/User';
// import HistoricalYield from './HistoricalYield'; // Assuming you have this component
// import AISamadhaan from './AISamadhaan'; // Assuming you have this component
// import Weather from './Weather'; // Assuming you have this component
// import User from './User'; // Assuming you have this component

const Sidebar = () => {
  // Sidebar toggle state
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div
        className={`sidebar bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}
        style={{ backgroundColor: '#365170' }}>
        <div className="flex items-center justify-between pt-7 pb-0 pl-7 pr-7 ">
          {isOpen && <h1 className='flex items-center text-lg pl-7'>Farmingo</h1>}
          <i
            className="bx bx-menu text-2xl cursor-pointer" 
            onClick={toggleSidebar}
          ></i>
        </div>
        
        <ul className="mt-6">
          {['Dashboard', 'New Schemes', 'Irrigation Model', 'Historical Yield', 'AI Samadhaan', 'Weather', 'User'].map((item, index) => {
              const path = `${index === 0 ? 'dashboard' : index === 1 ? 'schemes' : index === 2 ? 'irrigation' : index === 3 ? 'historical' : index === 4 ? 'ai' : index === 5 ? 'weather' : 'user'}`;

              return (
                <li key={index} className="flex items-center pt-7 pb-2 pl-7 pr-7 hover:bg-gray-700 cursor-pointer">
                  {/* Wrap the content in a Link component */}
                  <Link to={`/${path}`} className="flex items-center">
                    <i className={`bx ${index === 0 ? 'bx-grid-alt' : index === 1 ? 'bx-bell' : index === 2 ? 'bx-chat' : index === 3 ? 'bx-news' : index === 4 ? 'bx-bot' : index === 5 ? 'bx-cloud' : 'bx-user'} text-xl`}></i>
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
            {isOpen && <span className="ml-4">Kisan Name</span>}
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col flex-1">
       

        {/* Main Content Section */}
        <div className="flex-1 p-5 pl-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/irrigation" element={<Irrigation/>} />
            <Route path="/historical" element={<HistoricalYield/>} />
            <Route path="/ai" element={<AISamadhaan/>} />
            <Route path="/weather" element={<Weather/>} />
            <Route path="/user" element={<User/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
