import React from 'react';
import { TbMathSymbols } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <TbMathSymbols className="icon" />
        <p className="logo-text">
          Math Magician
        </p>
      </div>
      <ul className="links">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/Calculator" className="link">Calculator</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
      </ul>
    </nav>
  );
}
