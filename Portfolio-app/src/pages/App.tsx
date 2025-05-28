import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.css";

function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Ridge19/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>currently a work in progress...</p>
          <p>coming soon.. :)</p>
          <p>
            I build responsive websites and web apps using React, TypeScript,
            and modern technologies.
          </p>
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
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!loading && !error && (
            <div className="projects-list projects-list-3x4">
              {repos.map((repo) => (
                <div className="project-card" key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="project-desc">{repo.description}</p>
                  )}
                  <div className="project-meta">
                    <span className="project-lang">{repo.language}</span>
                    <span className="project-stars">
                      ★ {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="resume">
          <h2>Resume</h2>
          <p>You can view or download my resume below:</p>
          <div className="resume-actions">
            <a
              href="/Ridge_Tagala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume (PDF)
            </a>
            <a href="/Ridge_Tagala_Resume.pdf" download className="resume-btn">
              Download Resume
            </a>
          </div>
        </section>

        <section className="work-experience">
          <h2>Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Assistant IT Lead</h3>
                <span className="timeline-company">
                  Lifestyle Markets Australia
                </span>
                <span className="timeline-date">March 2025 – Present</span>
                <p>Short description of your role and achievements.</p><br />
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>IT Support Analyst</h3>
                    <span className="timeline-company">
                      Lifestyle Markets Australia
                    </span>
                    <span className="timeline-date">November 2024</span>
                    <p>Short description of your role and achievements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Bartender / All Rounder</h3>
                <span className="timeline-company">Deer Park Club</span>
                <span className="timeline-date">
                  January 2023 – February 2025
                </span>
                <p>
                  • Handled cash transactions totaling over $15,000 per week
                  with 100% accuracy.
                  <br />
                  • Served an average of 150+ customers per shift, maintaining
                  high satisfaction ratings.
                  <br />
                  • Trained 10+ new staff members, reducing average training
                  time by 20%.
                  <br />
                  • Monitored gaming areas to ensure full compliance with
                  Victorian gambling laws.
                  <br />
                  • Boosted kiosk sales by 12% through effective upselling and
                  stock management.
                  <br />
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Full Stack Developer Intern</h3>
                <span className="timeline-company">BusinessLocal Au</span>
                <span className="timeline-date">February 2025 – Present</span>
                <p>
                  • Delivered 6+ full-stack web applications, improving client
                  process automation and user engagement.
                  <br />
                  • Reduced bug resolution time by 35% through proactive
                  debugging and peer code reviews.
                  <br />
                  • Developed APIs used by 500+ users weekly, enabling smooth
                  data communication between systems.
                  <br />
                  • Created unit test cases that boosted test coverage to 85%,
                  reducing post-deployment issues.
                  <br />• Managed and deployed code updates with 0 downtime
                  across production environments.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Wordpress Developer</h3>
                <span className="timeline-company">
                  St. James The Apostle, Hoppers Crossing North
                </span>
                <span className="timeline-date">
                  December 2021 - December 2022
                </span>
                <p>
                  • Developed and maintained 4 custom WordPress websites,
                  increasing visitor retention by 35%.
                  <br />
                  • Improved load times by 50% through image optimization and
                  caching strategies.
                  <br />
                  • Increased site traffic by 40% using SEO best practices and
                  metadata optimization.
                  <br />
                  • Achieved 95% client satisfaction through iterative design
                  consultations and updates.
                  <br />• Created reusable code libraries that reduced future
                  development time by 30%.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:riidgyy@gmail.com">Email</a>
            </li>
            {/* Dynamically fetch LinkedIn profile */}
            {repos.length > 0 && (
              <li>
                <a
                  href="https://www.linkedin.com/in/ridge-tagala2002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <button
                  className="message-btn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ridge-tagala2002/overlay/contact-info/",
                      "_blank"
                    )
                  }
                >
                  Message
                </button>
              </li>
            )}
            <li>
              <a
                href="https://github.com/Ridge19"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;
