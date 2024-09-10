import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Global styles

// Importing Components
import Profile from './components/Profile';
import Blogs from './components/Blogs';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
