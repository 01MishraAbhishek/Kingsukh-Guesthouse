import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ['home', 'about', 'services', 'rooms', 'gallery', 'contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-pink-600">
            King Sukh Guest House
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-pink-600 font-semibold"
                className="cursor-pointer text-gray-700 dark:text-white hover:text-pink-600 font-medium transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}

            <a
              href="https://wa.me/919007062180"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-4 py-1.5 rounded hover:bg-pink-700 transition"
            >
              Book Now
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white dark:bg-gray-900">
          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="text-pink-600 font-semibold"
              className="block cursor-pointer text-gray-700 dark:text-white hover:text-pink-600 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <a
            href="https://wa.me/919007062180"
            className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
