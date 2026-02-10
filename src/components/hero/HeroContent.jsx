import CallToActionButtons from "./CallToActionButtons";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <p className="hero-role">Web Developer</p>

      <h2 className="hero-name">
        Prabhat Sharma
      </h2>

      <p className="hero-description">
       I build modern, responsive, and accessible web applications with a strong focus on clean UI, performance, and scalability. I enjoy turning complex requirements into intuitive user experiences using modern frontend technologies.
      </p>

      <CallToActionButtons />
    </div>
  );
};

export default HeroContent;
