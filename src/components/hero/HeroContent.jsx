import CallToActionButtons from "./CallToActionButtons";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <p className="hero-role">Web Developer</p>

      <h2 className="hero-name">
        Prabhat Sharma
      </h2>

      <p className="hero-description">
        I build modern, responsive, and accessible web applications
        with a focus on clean UI and performance.
      </p>

      <CallToActionButtons />
    </div>
  );
};

export default HeroContent;
