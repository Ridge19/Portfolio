import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>currently a work in progress...</p>
          <p>coming soon.. :)</p>
          <p>I build responsive websites and web apps using React, TypeScript, and modern technologies.</p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React & Redux</li>
            <li>TypeScript</li>
            <li>HTML5, CSS3</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Portfolio Website</h3>
            <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>E-commerce App</h3>
            <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <ul>
            <li><a href="mailto:your-email@example.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
