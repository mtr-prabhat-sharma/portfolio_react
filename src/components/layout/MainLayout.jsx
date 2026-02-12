import AboutSection from "../AboutSection";
import Header from "../Navigation/Header";
import SkillsSection from "../SkillsSection";
import Skills from "../SkillsSection";
import HeroSection from "../hero/HeroSection";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default MainLayout;
