import React from 'react';
import styles from './About.module.css';
import profilePic from '../assets/ashok - Copy.jpeg'; // Update this path to where your image is located

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Hello! I'm Ashok Yadav</h1>
          <h2 className={styles.subtitle}>Software Engineer | Front-End Developer</h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Ashok Yadav" className={styles.profilePic} />
        </div>
      </div>

      <section className={styles.section}>
        <h2>Professional Journey</h2>
        <p>My professional journey began with a Bachelor's degree in Electronics and Communication Engineering from Lovely Professional University. Shortly after, I joined JK Tech as a Software Engineer, where I developed and maintained web applications, collaborated with cross-functional teams, and delivered projects that enhanced the user experience and met client requirements.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li><strong>Front-End Technologies:</strong> React.js, JavaScript, TypeScript, HTML, CSS, Bootstrap</li>
          <li><strong>State Management:</strong> Redux</li>
          <li><strong>Back-End Technologies:</strong> Node.js, SQL</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>Projects</h2>
        <p><strong>POV Healthcare:</strong> Successfully delivered a web frontend for a medical record app using React.js, TypeScript, and Bootstrap.</p>
        <p><strong>Recruitment App:</strong> Developed the frontend of an internal recruitment app that streamlined the hiring process, using Node.js, React, and SQL.</p>
        <p><strong>Tic-Tac-Toe Game:</strong> Created a responsive Tic-Tac-Toe game using React, implementing game logic and a user-friendly interface.</p>
        <p><strong>Food Application:</strong> Developed a food ordering application using React and Context API for efficient state management.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Education</h2>
        <p><strong>Bachelor of Technology, Electronics and Communication Engineering</strong><br/>
        Lovely Professional University, Phagwara<br/>
        08/2017 - 08/2021</p>
      </section>
      
      <section className={styles.section}>
        <h2>Personal Interests</h2>
        <p>When I'm not coding, I enjoy exploring new technologies, solving complex problems, and continuously learning to stay updated with industry trends. In my free time, I love reading tech blogs, playing video games, and spending time with family and friends.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Contact</h2>
        <p>If you'd like to learn more about my work or discuss potential opportunities, feel free to connect with me on <a href="https://linkedin.com/in/ashok-yadav-505325174" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my projects on <a href="https://github.com/yashoka9876" target="_blank" rel="noopener noreferrer">GitHub</a>. You can also reach me via email at <a href="mailto:yashoka51@gmail.com">yashoka51@gmail.com</a>.</p>
      </section>
    </div>
  );
}

export default About;
