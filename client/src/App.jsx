import React from 'react'
import { Button } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LicensePage from './pages/LicensePage';
import StreamingPage from './pages/StreamingPage';
import AlertsPage from './pages/AlertsPage';
import RandomPage from './pages/RandomPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register-camera" element={<RegisterPage />} />
          <Route path="/admin-login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/alert" element={<AlertsPage />} />
          <Route path="/random" element={<RandomPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App