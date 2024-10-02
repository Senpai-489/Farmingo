
import React, { Children, useEffect, useState } from "react";
import Landing from './pages/Landing/Landing'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import { useAppStore } from "./store";
// import Dashboard from "./pages/dashboard";
import { apiClient } from "./lib/api-client";
import { GET_USER_INFO } from "./utils/constants";

//Harsh
import Dashboard from './pages/Dashboard/Dashboard'
import Schemes from './pages/dashboardpages/Scheme'
import Irrigation from './pages/dashboardpages/Irrigation'
import HistoricalYield from '@/pages/dashboardpages/Historical';
import AISamadhaan from '@/pages/dashboardpages/Aisamadhan';
import Weather from '@/pages/dashboardpages/Weather';
import User from '@/pages/dashboardpages/User';

const PrivateRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};
const App = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await apiClient.get(GET_USER_INFO, {
          withCredentials: true,
        });
        if (response.status === 200 && response.data.id) {
          setUserInfo(response.data);
        } else {
          setUserInfo(undefined);
        }
        console.log({ response });
      } catch (error) {
        setUserInfo(undefined);
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };
    if (!userInfo) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, [userInfo, setUserInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>}/>
   
    
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        /> 
         <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
    
    <Route path="/schemes" element={<Schemes/>}/>
    <Route path="/irrigation" element={<Irrigation/>}/>
    <Route path="/historical" element={<HistoricalYield/>} />
    <Route path="/ai" element={<AISamadhaan/>} />
    <Route path="/weather" element={<Weather/>} />
    <Route path="/user" element={<User/>} />
    <Route path="*" element={<Navigate to="auth" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
