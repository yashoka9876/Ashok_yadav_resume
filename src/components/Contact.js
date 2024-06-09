import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:yashoka51@gmail.com" className={styles.link}>yashoka51@gmail.com</a>
        </div>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <span className={styles.text}>9876514254</span>
        </div>
        <div className={styles.infoItem}>
          <FaLinkedin className={styles.icon} />
          <a href="https://linkedin.com/in/ashok-yadav-505325174" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin.com/in/ashok-yadav-505325174</a>
        </div>
        <div className={styles.infoItem}>
          <FaGithub className={styles.icon} />
          <a href="https://github.com/yashoka9876" target="_blank" rel="noopener noreferrer" className={styles.link}>github.com/yashoka9876</a>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
