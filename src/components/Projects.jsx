import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {/* Replace with actual project cards */}
      <div className="project-card">
        <div className="project">
          <h4>Deployed Application Project</h4>
          <p>Below is the link to my deployed project</p>
          <a href="https://shumaela.github.io/sh-refactorcode1/" target="_blank">Visit the Link</a>
        </div>
      </div>

      <div className="project-card">
        <div className="project1">
          <h3>More Projects</h3>
          <p>More projects to come!</p>
        </div>
      </div>

      <div className="project-card">
        <div className="project2">
          <h3>Contact Me</h3>
          <p>Email: shumu.laeeq@gmail.com / Tel: 201-779-7714 / Bogota, NJ</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
