import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <nav
    //   className={`top-0 left-0 w-full z-50 transition-all duration-500 shadow 
    //     ${ scrolled ? 'bg-[#0d1117] py-2 shadow-lg' : 'bg-[#0d1117] py-4'}`
    //         }
    // >
    //   <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
    //     {/* Logo */}
    //     <div className="text-white text-2xl font-bold">Samuel<span>.dev</span> </div>

    //     {/* Center Nav Links */}
    //     <ul className="hidden md:flex space-x-6 text-white text-sm font-medium">
    //       <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
    //       <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
    //       <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
    //       <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
    //     </ul>

    //     {/* Right Side Icons + Button */}
    //     <div className="flex items-center space-x-4">
    //       <a href="https://github.com/nukimoya" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
    //         <FaGithub size={20} />
    //       </a>
    //       <a href="https://linkedin.com/in/samuel-adelakun-ba1a2a346" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
    //         <FaLinkedin size={20} />
    //       </a>
    //       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
    //         <FaTwitter size={20} />
    //       </a>

    //       {scrolled && (
    //         <a
    //           href="#contact"
    //           className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm"
    //         >
    //           Get in Touch
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </nav>
    <nav class="fixed top-0 left-0 right-0 z-20 transition-all duration-500 py-4 sm:py-6 bg-transparent">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-16">
    
    {/* <!-- Logo --> */}
    <div class="transition-all duration-500 h-10 sm:h-12">
      <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="100%" stop-color="#E0E7FF" />
          </linearGradient>
          <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#9D7FDB" />
            <stop offset="100%" stop-color="#6DBBF8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <text x="10" y="38" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="url(#textGradient)" filter="url(#glow)">Adeyemi</text>
        <text x="125" y="38" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="url(#devGradient)">.dev</text>
      </svg>
    </div>

    {/* <!-- Nav Links --> */}
    <div class="hidden lg:flex items-center bg-navy-800/40 backdrop-blur-md rounded-full transition-all duration-500 py-3 px-8 border border-blue-500/10">
      <ul class="flex items-center gap-8">
        <li>
          <a href="#about" class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-white">
            About
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#projects" class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-blue-200 hover:text-white">
            Projects
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#skills" class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-blue-200 hover:text-white">
            Skills
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#contact" class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-blue-200 hover:text-white">
            Contact
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#blog" class="relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full text-blue-200 hover:text-white">
            Blog
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        </li>
      </ul>
    </div>

    {/* <!-- Social Icons --> */}
    <div class="hidden lg:flex items-center gap-6">
      <a href="https://x.com/hadeyemi_" target="_blank" rel="noopener noreferrer" aria-label="X"
         class="flex items-center justify-center transition-all duration-300 hover:text-cyan-300 transform hover:scale-110 text-xl text-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M20.49 3.5h-3.89l-3.37 4.35-3.64-4.35H2.62l6.81 8.23-6.81 8.77h3.89l3.61-4.65 3.88 4.65h6.49l-7.25-8.94 7.25-8.01z"></path>
        </svg>
      </a>
      <a href="https://github.com/adeyemiiiii7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
         class="flex items-center justify-center transition-all duration-300 hover:text-cyan-300 transform hover:scale-110 text-xl text-blue-200">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M165.9 397.4c... (truncated for brevity) ..." />
        </svg>
      </a>
    </div>

  </div>
</nav>

  );
};

export default Navbar;
