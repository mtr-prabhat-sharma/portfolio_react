import Header from "../Navigation/Header";
import HeroSection from "../hero/HeroSection";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default MainLayout;
