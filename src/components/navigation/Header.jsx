import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;
