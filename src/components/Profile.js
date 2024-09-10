import React from 'react';

function Profile() {
  return (
    <section className="section">
      <div className="profile-card">
        <img src="https://via.placeholder.com/150" alt="profile-pic" className="profile-pic" />
        <h2>Harika Danduprolu</h2>
        <p>Software Developer | Hackathon Enthusiast</p>
        <a href="https://github.com/harikadanduprolu" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
        <p className="summary">
          Welcome to my profile! I am passionate about solving real-world problems through software development and hackathons.
        </p>
      </div>
    </section>
  );
}

export default Profile;
