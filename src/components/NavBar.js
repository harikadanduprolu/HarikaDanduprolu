import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Separate CSS file for navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Harika</h1>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/home" className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to="/skills" className="navbar-link">Skills</Link></li>
          <li className="navbar-item"><Link to="/projects" className="navbar-link">Projects</Link></li>
          <li className="navbar-item"><Link to="/blogs" className="navbar-link">Blogs</Link></li>
          <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
