import AboutSection from "../AboutSection";
import Header from "../Navigation/Header";
import Skills from "../Skills";
import HeroSection from "../hero/HeroSection";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <Skills />
      </main>
    </div>
  );
};

export default MainLayout;
