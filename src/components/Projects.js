import React from 'react';
import './Projects.css'; // Separate CSS file for styling

const projects = [
  {
    id: 1,
    title: 'Flashcard Learning Tool',
    description: 'A web application for creating and managing flashcards to enhance learning and study efficiency.',
    link: '/projects/flashcard-tool'
  },
  {
    id: 2,
    title: 'BioBlock',
    description: 'A Blockchain-Powered Bio-Based Economy Platform aimed at promoting organic farming and sustainability.',
    link: '/projects/bioblock'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'An online platform for farmers to sell products directly to consumers, with features for organic certification.',
    link: '/projects/e-commerce'
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
