

import './App.css';
import postureImg from './assets/sittingposture.png';
import redesignImg from './assets/redesign.png';
import cafeImg from './assets/cafemobiledesign.png';
import portraitImg from './assets/me.jpg';

const projects = [
  {
    number: '01',
    title: 'Healthy Sitting Posture',
    type: 'Computer vision · Prototype',
    description: 'A posture-feedback concept that uses a side-view camera to identify whether a seated position appears healthy.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    image: postureImg,
    imageAlt: 'Posture detection interface comparing sitting positions',
  },
  {
    number: '02',
    title: 'Company Website Redesign',
    type: 'Website · UI design',
    description: 'A landing-page redesign focused on making a company website feel clearer, more current, and easier to navigate.',
    skills: ['Figma', 'UI/UX'],
    image: redesignImg,
    imageAlt: 'Screens from a redesigned company landing page',
  },
  {
    number: '03',
    title: 'Cafe Ordering App',
    type: 'Mobile app · UI design',
    description: 'A mobile ordering and checkout experience for a cafe, designed to make choosing items and completing payment straightforward.',
    skills: ['Figma', 'UI/UX'],
    image: cafeImg,
    imageAlt: 'Mobile screens for a cafe ordering and payment app',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tirta Fajar, home">TF<span>.</span></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:fajartirtaa00@gmail.com">Let's talk <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero page-width" id="about" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Frontend development <span className="eyebrow-divider">/</span> UI design</p>
            <h1 id="hero-title">Hi, I'm<br /><span>Tirta Fajar.</span></h1>
            <p className="hero-intro">I create thoughtful web interfaces and digital experiences, bringing together frontend development and a love for good design.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="mailto:fajartirtaa00@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-caption">A little code, a lot of curiosity.</p>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={portraitImg} alt="Portrait of Tirta Fajar" className="portrait" />
            </div>
            <div className="portrait-note"><span>01</span><span>Portfolio<br />2026</span></div>
          </div>
        </section>

        <section className="about-band" aria-label="About my approach">
          <div className="page-width about-content">
            <p className="section-kicker">A little about me</p>
            <p className="about-statement">I enjoy turning ideas into <span>clear, useful interfaces</span> — from the first sketch to the details that make a page feel right.</p>
          </div>
        </section>

        <section className="projects-section page-width" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 id="projects-title">Projects in progress<br />and practice<span>.</span></h2>
            </div>
            <p className="section-aside">A mix of frontend experiments<br />and interface design.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-copy">
                  <p className="project-number">{project.number} <span>{project.type}</span></p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-skills" aria-label="Tools and skills">
                    {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
                <div className={`project-visual project-visual-${project.number}`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-content">
            <div>
              <p className="section-kicker">Have a project in mind?</p>
              <h2 id="contact-title">Let's make<br />something useful<span>.</span></h2>
            </div>
            <div className="contact-links">
              <a className="contact-email" href="mailto:fajartirtaa00@gmail.com">fajartirtaa00@gmail.com <span aria-hidden="true">↗</span></a>
              <a href="https://linkedin.com/in/tirtafajar" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/Tirta016" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand" href="#top" aria-label="Back to top">TF<span>.</span></a>
        <p>Designed and built by Tirta Fajar <span>© {new Date().getFullYear()}</span></p>
        <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}

export default App;