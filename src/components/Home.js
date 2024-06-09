import React from 'react';
import styles from './Home.module.css';
import profilePic from '../assets/ashok - Copy.jpeg'; // Make sure to replace this with the path to your picture

function Home() {
    const handleDownloadResume = () => {
        // Replace 'resume.pdf' with the actual name of your PDF resume file
        const resumeUrl = process.env.PUBLIC_URL + '/Ashok12_4_24.pdf';
        window.open(resumeUrl);
      };
  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h1>Hello!</h1>
        <h2>I'm Ashok Yadav</h2>
        <h3>Software Engineer---</h3>
        <h3>Frontend Developer</h3>
        <button className={styles.resumeLink} onClick={handleDownloadResume}>Resume</button>
      </div>
      <div className={styles.profileContainer}>
        <img src={profilePic} alt="Ashok Yadav" className={styles.profilePic} />
      </div>
    </div>
  );
}

export default Home;
