

import './App.css';
import postureImg from './assets/sittingposture.png';
import redesignImg from './assets/redesign.png';
import cafemobiledesign from './assets/cafemobiledesign.png';
import avatarImg from './assets/me.jpg'; // Add your avatar image to assets folder


function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  const projects = [
    {
      title: "Healthy Sitting Posture",
      desc: "App detector using OpenPose",
      skills: ["HTML", "CSS", "JavaScript (basic)", "Python"],
      image: postureImg
    },
    {
      title: "Redesign Website",
      desc: "Worked for 2 months for 6 pages",
      skills: ["Figma", "UI/UX"],
      image: redesignImg
    },
    {
      title: "Personal Project UI Design - Cafe Mobile App",
      desc: "Designed a mobile app for a local cafe",
      skills: ["Figma", "UI/UX"],
      image: cafemobiledesign
    }
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">My Portfolio</div>
        <ul className="navbar__links">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
      <div className="row">
          <section id="about" className="about-section">
          <img src={avatarImg} alt="Profile" className="about__avatar" />
            <div className="about__text">
            <h2>About</h2>
            <p>Hi! I’m passionate about web development specifically Frontend Developer and UI/UX design.</p>
          </div>
        </section>
        <section id="projects">
          <h2 className="section-title">My Work</h2>
          <div className="work__boxes">
            {projects.map((project, index) => (
              <div className="work__box" key={index}> 
                <div className="work__text">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <ul className="work__list">
                    {project.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="work__image-box">
                  <img src={project.image} alt={project.title} className="work__image" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" style={{marginTop: '6rem'}}>
          <h2>Contact</h2>
          <p>Feel free to reach out via any of the links below!</p>
          <div className="contact__links">
            <a href="mailto:fajartirtaa00@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> fajartirtaa00@gmail.com</a>
            <a href="https://linkedin.com/in/tirtafajar" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/in/tirtafajar</a>
            <a href="https://github.com/Tirta016" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/Tirta016</a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> twitter.com/yourusername</a>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__links">
            <a href="mailto:your.email@example.com" aria-label="Email" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}


export default App