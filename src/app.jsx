import { useState } from "react";
import "./app.css";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "Track your expenses and manage your budget effectively with our intuitive expense tracker app.",
    tech: "React.CSS, JavaScript, HTML",
    link: "https://github.com",
  },
  {
    title: "Weather App",
    description:
      "Get real-time weather updates and forecasts for your location with our user-friendly weather app.",
    tech: "React.CSS, JavaScript, HTML",
    link: "https://github.com",
  },
  {
    title: "To-Do List",
    description:
      "Stay organized and boost your productivity with our simple and efficient to-do list application.",
    tech: "React.CSS, JavaScript, HTML",
    link: "https://github.com",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo">My Portfolio</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav-links-open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">REACT DEVELOPER IN TRAINING </p>
          <h1>Building useful things for the web</h1>
          <p className="hero-text">
            I create responsive and user-friendly web applications using React
            and modern web technologies, Stay turned on!
          </p>
          <a href="#projects" className="primary-button">
            Explore my projects{" "}
          </a>
        </section>

        <section id="about" className="about">
          <p className="eyebrow">ABOUT ME</p>
          <h1>Learning by building</h1>
          <p className="about-text">
            I am a passionate React developer in training, dedicated to building
            innovative and efficient web applications. With a strong foundation
            in JavaScript, HTML, and CSS, I strive to create seamless user
            experiences and contribute to the ever-evolving world of web
            development.
          </p>
        </section>

        <section id="projects" className="projects">
          <p className="eyebrow">MY WORKS</p>
          <h1>Featured Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className="tech">{project.tech}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-link">
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div className="dedication">
        <p>Thank you for visiting my portfolio!</p>
      </div>

      <footer className="footer">
        <p>Built with React and Vite</p>
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
