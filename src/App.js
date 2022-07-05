import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const App = () => (
  <Router>
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </main>
  </Router>
);

export default App;
