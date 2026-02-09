import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT */}
      <div className="md:w-1/2 bg-orange-500 flex flex-col items-center justify-center relative">
        <ProfileImage />
        <div className="absolute bottom-8 left-8">
          <SocialLinks />
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 bg-neutral-900 flex items-center px-6 md:px-20">
        <HeroContent />
      </div>

    </section>
  );
};

export default HeroSection;
