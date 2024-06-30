// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/track">Track Expenses</Link></li>
        <li><Link to="/statistics">Statistics</Link></li> {/* Add Statistics link */}
      </ul>
    </nav>
  );
};

export default Navbar;

