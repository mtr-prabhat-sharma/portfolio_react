import CallToActionButtons from "./CallToActionButtons";

const HeroContent = () => {
  return (
    <div className="max-w-xl text-center md:text-left">
      <p className="text-gray-400 text-sm mb-2">Web Developer</p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Prabhat Sharma
      </h2>

      <p className="text-gray-300 leading-relaxed mb-8">
        I build modern, responsive, and accessible web applications
        with a focus on clean UI and performance.
      </p>

      <CallToActionButtons />
    </div>
  );
};

export default HeroContent;
