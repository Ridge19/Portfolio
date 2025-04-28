import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Ridge Tagala's Portfolio</h1>
        <p>Welcome to my personal portfolio! I am a Web Developer and React enthusiast.<br>
        </br>
        -- STILL A WORK IN PROGRESS --</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with expertise in front-end technologies like React, TypeScript, and Vite. I love building sleek, responsive websites and web apps.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React & Redux</li>
          <li>TypeScript</li>
          <li>HTML5, CSS3</li>
          <li>Node.js, Express</li>
          <li>Git & GitHub</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Project 1: Portfolio Website</h3>
          <p>This is my personal portfolio website built with React and Vite.</p>
          <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2: E-commerce App</h3>
          <p>An e-commerce web app built with React, Redux, and Node.js.</p>
          <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more projects here */}
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>You can reach me via email or follow me on my social media platforms:</p>
        <ul>
          <li><a href="mailto:your-email@example.com">Email</a></li>
          <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Ridge Tagala. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
