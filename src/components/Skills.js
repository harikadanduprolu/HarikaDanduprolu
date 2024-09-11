import React from 'react';
import './Skills.css'; // Separate CSS file for styling

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Python',
    'SQL',
    'Git',
    'REST APIs',
    'MongoDB'
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
