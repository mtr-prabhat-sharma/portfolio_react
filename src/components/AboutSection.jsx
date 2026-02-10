import '../styles/aboutsection.scss';

import aboutIllustration from "../assets/about-boy.png";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-divider"></div>

      <div className="about-content">
        {/* LEFT */}
        <div className="about-text">
          <h3 className="about-title">Who I am</h3>

          <p className="about-intro">
            I’m Prabhat, a frontend-focused software engineer passionate about
            building elegant and scalable web applications.
          </p>

          <p className="about-description">
            I work with modern JavaScript frameworks like React and Angular to
            create responsive, accessible, and high-performance user interfaces.
            I enjoy solving complex UI problems and transforming ideas into
            polished digital experiences.
          </p>
        </div>

        {/* RIGHT – Illustration */}
        <div className="about-visual">
          <img
            src={aboutIllustration}
            alt="Developer working on laptop"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

