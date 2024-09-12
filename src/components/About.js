import React from 'react';
import './About.css'; // Ensure you have the CSS for styling

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p className="about-text">
          Hello! I'm Harika, a passionate software developer with expertise in web development and a keen interest in exploring new technologies. I have experience with JavaScript, React, Node.js, and more. My goal is to create impactful software that enhances user experience and drives innovation.
        </p>
        <p className="about-text">
          I enjoy working on challenging projects and constantly strive to learn and grow in the field of technology. Feel free to explore my projects and get in touch for collaboration opportunities!
        </p>
        
        <h2>Contact Details</h2>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        </ul>
        
        <h2>Connect with Me</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/harika-danduprolu-319443264/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img 
              src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-7zb6wa8q.png" 
              alt="LinkedIn"
              width="40" 
              
            />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
}

export default About;
