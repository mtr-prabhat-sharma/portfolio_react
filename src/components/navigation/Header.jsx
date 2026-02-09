import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;
