import '../styles/skills.scss';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt
} from "react-icons/fa";
import { SiFigma, SiDjango } from "react-icons/si";

const SkillsSection = () => {
  return (
    <section className="skills-block" id="skills">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-row">
        <div className="skill-card">
          <SiFigma />
          <span>Figma</span>
        </div>

        <div className="skill-card">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <FaReact />
          <span>React</span>
        </div>

        <div className="skill-card">
          <SiDjango />
          <span>Django</span>
        </div>

        <div className="skill-card">
          <FaHtml5 />
          <span>HTML</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

