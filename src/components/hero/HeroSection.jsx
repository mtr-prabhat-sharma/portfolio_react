import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row relative">

      {/* LEFT (ORANGE) */}
      <div className="flex-[2] bg-orange-500 relative">
        <div className="absolute bottom-8 left-8">
          <SocialLinks />
        </div>
      </div>

      {/* RIGHT (BLACK) */}
      <div className="md:flex-[3] bg-neutral-900 flex items-center justify-center px-6 md:px-20 md:pl-40">
        <HeroContent />
      </div>

      {/* CENTER PROFILE IMAGE */}
      <div className="absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <ProfileImage />
      </div>

    </section>
  );
};

export default HeroSection;
