import Header from "../Navigation/Header";
import HeroSection from "../hero/HeroSection";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <HeroSection />
      </main>
    </div>
  );
};

export default MainLayout;
