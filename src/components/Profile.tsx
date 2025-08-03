import React from 'react';
import './Profile.css';
import zaid from './zaid.jpg';

const Profile: React.FC = () => (
  <div className="profile-card">
    <img src={zaid} alt="Zaid Ahmad" className="profile-avatar" />
    <h2>Zaid Ahmad</h2>
    <h4>Senior Software Engineer</h4>
    <p className="profile-summary">
      Passionate Senior Software Engineer with 6+ years of hands-on experience architecting and delivering scalable solutions using Python (Django, Flask, FastAPI), React, and Generative AI. Adopt at building robust cloud-native applications, driving DevOps automation, and leveraging cutting-edge AI technologies to solve real-world problems. Proven leader in cross-functional teams, committed to innovation and excellence.
    </p>
    <div className="profile-section">
      <h5>Key Skills</h5>
      <ul className="profile-skills">
        <li>Python (Django, Flask, FastAPI)</li>
        <li>React & Javascript</li>
        <li>Generative AI & LLMs</li>
        <li>DevOps (CI/CD, Docker, Kubernetes)</li>
        <li>Cloud (AWS, Azure)</li>
        <li>System Architecture & API Design</li>
        <li>System Design & Design Pattern</li>
      </ul>
    </div>
    <div className="profile-links">
      <a href="mailto:syedzaidahmad99@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/syed3474/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/20162877" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <div className="profile-location">New Delhi, India</div>
  </div>
);

export default Profile;