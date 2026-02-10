import '../styles/skills.scss';


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaGitAlt
} from "react-icons/fa";

const SkillsMarquee = () => {
  return (
    <section className="skills-section">
      <h3 className="skills-title">Skills</h3>

      <div className="skills-marquee">
        <div className="skills-track">

          {/* One set */}
          <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
          <div className="skill-item"><FaCss3Alt /> <span>CSS / SCSS</span></div>
          <div className="skill-item"><FaJs /> <span>JavaScript</span></div>
          <div className="skill-item"><FaReact /> <span>React</span></div>
          <div className="skill-item"><FaAngular /> <span>Angular</span></div>
          <div className="skill-item"><FaNodeJs /> <span>Node.js</span></div>
          <div className="skill-item"><FaAws /> <span>AWS</span></div>
          <div className="skill-item"><FaGitAlt /> <span>Git</span></div>

          {/* Duplicate set for seamless loop */}
          <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
          <div className="skill-item"><FaCss3Alt /> <span>CSS / SCSS</span></div>
          <div className="skill-item"><FaJs /> <span>JavaScript</span></div>
          <div className="skill-item"><FaReact /> <span>React</span></div>
          <div className="skill-item"><FaAngular /> <span>Angular</span></div>
          <div className="skill-item"><FaNodeJs /> <span>Node.js</span></div>
          <div className="skill-item"><FaAws /> <span>AWS</span></div>
          <div className="skill-item"><FaGitAlt /> <span>Git</span></div>

        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
