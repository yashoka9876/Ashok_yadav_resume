import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    {
      title: 'POV Healthcare',
      description: 'Successfully delivered a web frontend of a medical record app using React.js, TypeScript, and Bootstrap.',
      technologies: 'React.js, TypeScript, Bootstrap'
    },
    {
      title: 'Recruitment App',
      description: 'Developed the frontend of an internal recruitment app for JK Tech. The app speeds up the recruitment process and ensures that the very best talent is identified, engaged, and brought into the business.',
      technologies: 'Node.js, React, SQL'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Developed a Tic-Tac-Toe game using React, implementing the classic game logic with a responsive user interface.',
      technologies: 'React, CSS'
    },
    {
      title: 'Food Application',
      description: 'Developed a Food Ordering Application using React leveraging the Context API for efficient state management across components.',
      technologies: 'React, Context API, CSS'
    }
  ];

  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div className={styles.project} style={{ '--order': index }} key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
