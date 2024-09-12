import React from 'react';
import './Profile.css'; // CSS for styling

function Profile() {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-image">
          <img src="https://blog.finxter.com/wp-content/uploads/2023/07/Finxter_A_20-year_old_programmer_with_hoodie_sitting_in_front_o_660ce19b-d406-45dd-a903-1654b2eaeda9-1.png" alt="profile-pic" />
        </div>
        <div className="profile-info">
          <h1 className="glow-text">Hello, It's Me</h1>
          <h2 className="highlight">Harika Danduprolu</h2>
          <p className="highlight">And I'm a <span className="highlight">Software Developer</span></p>
          <p className="summary">
            Welcome to my profile! I am passionate about solving real-world problems through software development and hackathons.
          </p>
          <a href="https://github.com/harikadanduprolu" target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fa fa-download "></i> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
