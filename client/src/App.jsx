/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './jsx/Navbar';
import Slideshow from './jsx/Slideshow';
import Section from './jsx/Section'
import Footer from './jsx/Footer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Slideshow />} />
          
          {/* <Route path="/section" element={<Section />} /> */}
        </Routes>
        <Section/>
        <Footer />
        
      </div>
    </Router>
      
  )
}

export default App
