import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    href: 'https://x.com/ayothemsft',
    label: 'X',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M20.49 3.5h-3.89l-3.37 4.35-3.64-4.35H2.62l6.81 8.23-6.81 8.77h3.89l3.61-4.65 3.88 4.65h6.49l-7.25-8.94 7.25-8.01z"></path>
      </svg>
    ),
  },
  {
    href: 'https://github.com/nukimoya',
    label: 'GitHub',
    icon: (
      <FaGithub size={22} />
    ),
  },
  {
    href: 'https://linkedin.com/in/samuel-adelakun-ba1a2a346',
    label: 'LinkedIn',
    icon: (
      <FaLinkedin size={22} />
    ),
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#about');

  // Scroll detection for shadow and background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for hash changes to update active nav link
  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || '#about');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Smooth scroll tracking: update activeHash as user scrolls
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is considered active if its top is within 120px from the top (adjust as needed)
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveHash(`#${sectionIds[i]}`);
            found = true;
            break;
          }
        }
      }
      // If no section is found (scrolled above first), default to first
      if (!found) {
        setActiveHash(`#${sectionIds[0]}`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run on mount in case user reloads mid-page
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 bg-transparent ${
        scrolled ? 'py-2' : 'py-6'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-16">
        {/* Logo */}
        <div className="transition-all duration-500 h-10 sm:h-12 flex items-center select-none">
          <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0E7FF" />
              </linearGradient>
              <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9D7FDB" />
                <stop offset="100%" stopColor="#6DBBF8" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <text x="10" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="url(#textGradient)" filter="url(#glow)">Samuel</text>
            <text x="110" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="url(#devGradient)">.dev</text>
          </svg>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center bg-navy-800/40 backdrop-blur-md rounded-full transition-all duration-500 py-3 px-8 border border-blue-500/10 shadow-md">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-blue-200 hover:text-white focus:text-white focus:outline-none group ${
                    activeHash === link.href ? 'text-cyan-300 font-bold' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 origin-left rounded-full ${
                    activeHash === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center transition-all duration-300 hover:text-cyan-300 transform hover:scale-110 text-xl text-blue-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d1117]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-all duration-300 lg:hidden">
          <button
            className="absolute top-6 right-6 p-2 rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes size={28} />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-2xl font-semibold transition-all duration-200 ${
                    activeHash === link.href ? 'text-cyan-300 underline underline-offset-8 font-bold' : 'text-blue-200 hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-8 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center transition-all duration-300 hover:text-cyan-300 transform hover:scale-110 text-2xl text-blue-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
