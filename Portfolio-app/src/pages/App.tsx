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
        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-flex">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHMMLpJ222aig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711705120313?e=1753920000&v=beta&t=W0Bc_aI9StcGEHQAN4gxXKhL3jt52jI1fkbXltfsiZc"
              alt="Ridge Tagala portrait"
              className="about-avatar"
            />
            <div className="about-content">
              <p className="about-intro">
                <span className="about-hi">Hi, I'm Ridge Tagala</span> — a{" "}
                <span className="about-role">Full Stack Developer</span> and
                Computer Science student based in Melbourne.
              </p>
              <ul className="about-list">
                <li>
                  💻 Full Stack Developer and{" "}
                  <b>Computer Science student</b> based in Melbourne.
                </li>
                <li>
                  🚀 Passionate about building{" "}
                  <b>modern, user-focused web applications</b> with React,
                  TypeScript, and Node.js.
                </li>
                <li>
                  🏢 Currently interning at <b>BusinessLocal</b> and managing IT
                  operations at <b>Lifestyle Markets Australia</b>.
                </li>
                <li>
                  🤖 Exploring{" "}
                  <b>cybersecurity, networking, and automation</b> through side
                  projects and academic work.
                </li>
                <li>
                  🤝 Thrive on <b>collaboration</b>, enjoy <b>mentoring peers</b>,
                  and constantly learning new tech.
                </li>
                <li>
                  🎮 Outside of coding: gaming, discovering new cafes ☕, and
                  tinkering with gadgets.
                </li>
              </ul>
              <p className="about-outro">
                When I'm not coding, you'll find me gaming, exploring new cafes,
                or tinkering with tech gadgets. Let's connect and build something
                awesome! ✨
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React & Redux</li>
            <li>TypeScript</li>
            <li>HTML5, CSS3</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projects" className="projects">
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
        <section id="resume" className="resume">
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

        <section id="work-experience" className="work-experience">
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
                <p>
                  • Supported management across 100+ daily operational tasks,
                  enhancing team efficiency by 25%.
                  <br />
                  • Directed automation of internal office systems, reducing
                  manual data entry time by 40%.
                  <br />
                  • Supervised 5 junior staff members, improving onboarding time
                  by 30%.
                  <br />
                  • Maintained administrative records with 98% accuracy,
                  enabling reliable performance tracking.
                  <br />
                  • Improved internal communication workflows, decreasing email
                  response time by 20%.
                  <br />
                </p>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>IT Support Analyst</h3>
                    <span className="timeline-company">
                      Lifestyle Markets Australia
                    </span>
                    <span className="timeline-date">November 2024</span>
                    <p>
                      • Resolved 150+ technical support tickets per month with
                      an average resolution time of under 2 hours.
                      <br />
                      • Achieved 98% end-user satisfaction in post-resolution
                      surveys.
                      <br />
                      • Reduced recurring IT issues by 35% through documentation
                      and root cause analysis.
                      <br />
                      • Contributed to a 20% reduction in hardware downtime by
                      implementing preventive maintenance schedules.
                      <br />
                      • Onboarded and configured 30+ new employee workstations,
                      ensuring readiness from day one.
                      <br />
                      • Deployed software updates and patches across 50+ systems
                      with zero critical disruptions.
                      <br />
                      • Documented 20+ knowledge base articles to improve
                      internal troubleshooting efficiency.
                      <br />• Assisted in the migration of company data to
                      cloud-based solutions, improving accessibility and backup
                      integrity.
                    </p>
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

        <section
          id="education-certification"
          className="education-certification"
        >
          <h2>Education & Certifications</h2>
          <div className="education-list">
            <div className="education-item">
              <h3>Associates Degree of Information Technology</h3>
              <span className="education-school">RMIT University</span>
              <span className="education-date">
                February 2023 – December 2023
              </span>
              <p>
                Pathway to Bachelors of Computer Science, I completed:
                <br />
                • Further Programming (Java)
                <br />
                • Discrete Mathematics
                <br />
              </p>
            </div>
            {/* Add more education items as needed */}
            <div className="education-item">
              <h3>Bachelors Of Computer Science</h3>
              <span className="education-school">RMIT University</span>
              <span className="education-date">
                February 2024 – December 2026
              </span>
              <p>
                Building on the foundation in my Associates Degree, I completed:
                <br />
                • Intro to C++
                <br />
                • Practical Statistics
                <br />
                • Operating Systems Principles
                <br />
                • Practical Data Science
                <br />
              </p>
            </div>
          </div>
          <div className="certification-list">
            <div className="certification-item">
              <h3>Responsible Service Of Gambling (RSG)</h3>
              <span className="certification-org"></span>
              <span className="certification-date"></span>
              <p>
                Certified to responsibly manage gambling activities in
                compliance with Australian laws.
                <br />
                Trained in identifying problem gambling, ensuring a safe
                environment for patrons and staff.
              </p>
            </div>
            <div className="certification-item">
              <h3>Responsible Service Of Alcohol (RSA)</h3>
              <span className="certification-org"></span>
              <span className="certification-date"></span>
              <p>
                Certified to responsibly serve and manage the sale of alcohol in
                accordance with state laws.
                <br />
                Trained in identifying intoxication, managing difficult
                situations,
                <br />
                and ensuring a safe and compliant environment for patrons and
                staff.
              </p>
            </div>
            {/* Add more certification items as needed */}
          </div>
          <div className="certification-list">
            <div className="certification-item">
              <h3>Natoinal Police Check</h3>
              <span className="certification-org"></span>
              <span className="certification-date"></span>
              Cleared Australian national police check, verifying a clean
              criminal record and suitability for roles requiring integrity,
              trust, and compliance with legal standards.
            </div>
            {/* Add more certification items as needed */}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:riidgyy@gmail.com">Email: riidgyy@gmail.com</a>
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