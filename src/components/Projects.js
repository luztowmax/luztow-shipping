import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'EASYBOOK INVENTORY MANAGEMENT SOFTWARE. ', // Placeholder for project description
      image: '/assets/Easybook logo.jpg', // Placeholder - replace with actual image path
      link: 'https://example.com/project1' // Placeholder - replace with actual URL
    },
    {
      name: 'Project 2',
      description: 'RANMI APP.Its a logistics, laundry and  food ordering app', // Placeholder for project description
      image: '/assets/Ranmi.jpg', // Placeholder - replace with actual image path
      link: 'https://example.com/project2' // Placeholder - replace with actual URL
    },
    {
      name: 'Project 3',
      description: 'Description for Project 3 will go here.', // Placeholder for project description
      image: '/assets/idea.jpg', // Placeholder - replace with actual image path
      link: 'https://example.com/project3' // Placeholder - replace with actual URL
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-description">{project.description}</div>
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-name">{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
