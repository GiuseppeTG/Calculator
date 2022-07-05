import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// eslint-disable-next-line import/extensions
import Calculator from './components/Calculator.js';

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
