import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    href: 'https://linkedin.com/in/samuel-adelakun-35b379248/',
    label: 'LinkedIn',
    icon: (
      <FaLinkedin size={22} />
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
    href: 'https://x.com/ayothemsft',
    label: 'X',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M20.49 3.5h-3.89l-3.37 4.35-3.64-4.35H2.62l6.81 8.23-6.81 8.77h3.89l3.61-4.65 3.88 4.65h6.49l-7.25-8.94 7.25-8.01z"></path>
      </svg>
    ),
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#about');
  const [showGetInTouch, setShowGetInTouch] = useState(false);

  // Scroll detection for shadow and background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
      setShowGetInTouch(scrollY > 200); // Show button after 200px scroll
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-900 bg-transparent ${
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
          <div className={`hidden lg:flex items-center transition-all duration-500 ${showGetInTouch ? 'gap-4' : 'gap-6'}`}>
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
            
            {/* Get in Touch Button - only renders when showGetInTouch is true */}
            {showGetInTouch && (
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 transform animate-in slide-in-from-right-5 fade-in"
              >
                Get in touch
              </a>
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'top-3 rotate-45' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0d1117]/98 backdrop-blur-xl border-l border-blue-500/20 shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`group flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeHash === link.href
                        ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30'
                        : 'text-blue-200 hover:text-white hover:bg-blue-500/10'
                    }`}
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                      activeHash === link.href 
                        ? 'bg-cyan-300 shadow-lg shadow-cyan-300/50' 
                        : 'bg-blue-400 group-hover:bg-white'
                    }`} />
                    {link.name}
                    {activeHash === link.href && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="border-t border-blue-500/20 p-6">
            <p className="text-sm font-medium text-blue-200 mb-4">Connect with me</p>
            
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 hover:text-cyan-300 hover:bg-blue-500/20 hover:border-cyan-400/50 hover:scale-105 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Mobile Get in Touch Button - only renders when showGetInTouch is true */}
            {showGetInTouch && (
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-in slide-in-from-bottom-3 fade-in"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;