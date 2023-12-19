/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './jsx/Navbar';
import Slideshow from './jsx/Slideshow';
import Section from './jsx/Section';
import Footer from './jsx/Footer';
import Login from './jsx/Login';
import Civilian from './jsx/Civilian';
import Police from './jsx/Police';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Slideshow /><Section /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/civilian" element={<Civilian />} />
          <Route path="/police" element={<Police />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
