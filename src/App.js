import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import About from './components/About';
import DropAnimation from './DropAnimation'; // Import the animation
import './App.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  // After the animation completes, show the rest of the website
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 4000); // Duration of animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showAnimation ? (
        <DropAnimation />
      ) : (
        <>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
