import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* LEFT (ORANGE) */}
      <div className="hero-left">
        <div className="hero-social">
          <SocialLinks />
        </div>
      </div>

      {/* RIGHT (BLACK) */}
      <div className="hero-right">
        <HeroContent />
      </div>

      {/* CENTER PROFILE IMAGE */}
      <div className="hero-profile">
        <ProfileImage />
      </div>

    </section>
  );
};

export default HeroSection;
