const NavigationMenu = () => {
  return (
    <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
      <a href="#about" className="hover:text-white">About</a>
      <a href="#skills" className="hover:text-white">Skills</a>
      <a href="#projects" className="hover:text-white">Projects</a>
      <a href="#contact" className="hover:text-white">Contact</a>
    </nav>
  );
};

export default NavigationMenu;
