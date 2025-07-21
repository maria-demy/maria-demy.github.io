import { useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';

const SCROLL_OFFSET = 100;

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'apps', label: 'Apps' },
      { id: 'blog', label: 'Blog' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + SCROLL_OFFSET;

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(navItems[index].id);
        }
      }
    });
  }, [navItems, setActiveSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavItemClassName = itemId => {
    const baseClasses =
      'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-heading';
    return activeSection === itemId
      ? `${baseClasses} text-theme-accent bg-theme-accent/20`
      : `${baseClasses} text-theme-secondary hover:text-theme-accent hover:bg-theme-accent/10`;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-theme-background/90 backdrop-blur-sm border-b border-theme-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-semibold text-theme-accent font-heading">
              🌸
            </h1>
            <div className="hidden md:flex space-x-6" role="menubar">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getNavItemClassName(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-theme-secondary hover:text-theme-accent"
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
