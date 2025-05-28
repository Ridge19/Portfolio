import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css';

function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Ridge19/repos')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repositories');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
          {loading && <p>Loading repositories...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && (
            <div className="projects-list">
              {repos.map((repo) => (
                <div className="project-card" key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-title">
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="project-desc">{repo.description}</p>
                  )}
                  <div className="project-meta">
                    <span className="project-lang">{repo.language}</span>
                    <span className="project-stars">★ {repo.stargazers_count}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
