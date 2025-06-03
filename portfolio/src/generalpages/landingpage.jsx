import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

// import { useState } from 'react'


import SkillsSection from '../components/skillsection'
import ProfessionalSkills from '../components/professionalskills'
import TechStack from '../components/techstackk'
import ProjectShowcase from '../components/projectshowcase'
import projects from '../components/projects';
import SkillTabs from '../components/aboutcategories'
import Navbar from '../components/navbar'
import CurrentlyLearning from '../components/currentlylearning';
import InterestsSection from '../components/interestsSection';

const LandingPage = () => {
    const formRef = useRef(null);
    const [buttonText, setButtonText] = useState('Send Message');

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        emailjs.sendForm('service_fdz8wit', 'template_zpmcywi', formRef.current)
            .then(() => {
                toast.success('Message sent successfully!');
                setButtonText('Send Message');
                formRef.current.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                const message = error?.text || error?.message || 'An unknown error occurred';
                toast.error('Failed to send message: ' + message);
                setButtonText('Send Message');
            });
    };

    return (
    <div className="relative min-h-screen">
        {/* Animated Gradient Background */}
        <div className="animated-bg" />
            {/* SVG Blobs - more, lighter, unique movement */}
            <svg className="blob blob-1" style={{top: '-60px', left: '-80px', width: '320px', height: '320px', position: 'absolute'}} viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="#223a5c"/></svg> 
            {/*<svg className="blob blob-2" style={{bottom: '-80px', right: '-60px', width: '260px', height: '260px', position: 'absolute'}} viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="#2e5a7a"/></svg> */}
            <svg className="blob blob-3" style={{top: '40%', left: '60%', width: '180px', height: '180px', position: 'absolute'}} viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="#3ec6ff"/></svg> 
            <svg className="blob blob-4" style={{top: '70%', left: '10%', width: '200px', height: '200px', position: 'absolute'}} viewBox="0 0 400 400" fill="none"><ellipse cx="200" cy="200" rx="200" ry="200" fill="#4b3c6e"/></svg> 
            <Navbar />
            {/* Hero Section */}
            <section className='flex flex-col items-center justify-center text-center pt-35 pb-10 relative z-10 fade-in' 
                id='hero'>
                <h1 className="text-7xl md:text-7xl font-extrabold text-white bg-clip-text drop-shadow-lg mb-10 mt-15 tracking-tight">
                    Samuel Adelakun
                </h1>

                {/* 🔵 Blurred Glowing Circle */}
                <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-20 sm:w-96 h-20 sm:h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse z-[-1]"></div>

                {/* 🔡 Typewriter Text */}
                <div className="text-lg xs:text-xl sm:text-xl md:text-2xl text-cyan-300 h-8 sm:h-12 mb-6 sm:mb-8">
                    <Typewriter
                    options={{
                        strings: ['Back-End Developer', 'Full-stack Developer', 'Cloud Engineer', 'AI Enthusiast'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>

                <div className="max-w-3xl text-sm md:text-lg text-blue-100 mt-2 mb-10 px-5 py-6 bg-transparent border border-white/10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] rounded-lg backdrop-blur-lg">
                    Building scalable systems that solve real problems. Computer Science graduate with 2+ years of full-stack experience in TypeScript, React, Node.js, Django & AI-Driven Development. Passionate about cloud-native development, AI-powered solutions, and crafting seamless digital experiences.
                </div>


                <div className="flex flex-col sm:flex-row gap-5 mt-4 justify-center">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-700 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-500 hover:to-cyan-700 hover:translate-y-1 transition-all duration-300">
                    My Resume
                    </button>
                    <button className="px-8 py-3 rounded-lg bg-white/10 text-cyan-300 font-semibold border border-cyan-400 shadow hover:bg-cyan-800 hover:text-white transition-all duration-300">
                    Get in Touch
                    </button>
                </div>

                <div className='mt-10 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                    <div className='w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center'>
                        <div className='w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse'></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto my-7 pt-17 fade-in" id='about'>
                <h2 className="text-3xl font-bold text-center mb-10 text-cyan-300">About Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 my-15 border border-cyan-300/20 shadow-lg shadow-cyan-400/10 rounded-xl transition-all duration-300'>
                    <div className='flex justify-center md:justify-start'>
                        {/* Profile image placeholder, can be replaced later */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-blue-900 shadow-lg flex items-center justify-center text-3xl font-bold text-white">SA</div>
                    </div>
                    <div className='md:col-span-2'>
                        <h3 className="text-xl font-semibold mb-4 text-white-100">Software Engineer</h3>
                        <p className="text-blue-100 text-base leading-tight mb-4">I am a software developer with a strong foundation in full-stack development (React.js, Node.js, Flutter) and a growing expertise in cloud computing. I enjoy building scalable, user-friendly applications and optimizing backend systems for performance and efficiency.</p>
                        <p className="text-blue-100 text-base leading-tight">I thrive in collaborative, fast-paced environments where I can solve real-world problems, contribute meaningful solutions, and continue learning. My goal is to merge software development and cloud computing to build robust, scalable systems that drive innovation.</p>
                    </div>
                </div>
                <SkillTabs />
                <InterestsSection />
            </section>

            {/* Projects Section */}
            <section className="max-w-6xl mx-auto my-16 p-10 pt-20 fade-in text-center" id='projects'>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Featured Projects</h2>
                <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto px-4">A showcase of my recent work in full-stack development, AI integration, and mobile applications</p>
                <ProjectShowcase projects={projects} />
            </section>

            {/* Skills Section */}
            <section className="max-w-6xl mx-auto my-10 p-10 pt-20 fade-in" id='skills'>
                <h2 className="text-3xl font-bold text-center mb-2 text-cyan-300">Skills & Expertise</h2>
                <p className="text-center text-blue-100 mb-6">A comprehensive overview of my technical skills and the tools I use to build innovative solutions</p>
                <SkillsSection />
                <TechStack />
                <ProfessionalSkills/>
                <CurrentlyLearning />
            </section>

            {/* Contact Section */}
            <section className="max-w-5xl mx-auto my-16 p-10 pt-20 fade-in" id='contact'>
                <div className='text-center '>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Let's Connect</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">Have an exciting project in mind or want to explore collaboration 
                        opportunities? I'd love to hear from you and discuss how we can bring your vision to life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                    {/* Left Section */}
                    <div class="space-y-8">
                    {/* <!-- Header & Description --> */}
                    <div>
                        <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">Get In Touch</h3>
                        <p class="text-blue-200 text-lg mb-8">
                        I'm currently available for freelance projects and full-time opportunities.
                        Whether you have a question, want to start a project, or just want to say hello,
                        I'd be happy to hear from you.
                        </p>
                    </div>

                    {/* <!-- Contact Cards --> */}
                    <div class="space-y-6">
                        {/* <!-- Email --> */}
                        <a href="mailto:sayomikun123@gmail.com"
                        class="flex items-center gap-4 p-4 bg-navy-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:translate-x-2 group">
                        <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-envelope text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Email</h4>
                            <p class="text-blue-200 text-sm">sayomikun123@gmail.com</p>
                        </div>
                        </a>

                        {/* <!-- Phone --> */}
                        <a href="tel:"
                        class="flex items-center gap-4 p-4 bg-navy-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:translate-x-2 group">
                        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-phone-alt text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Phone</h4>
                            <p class="text-blue-200 text-sm">+1 (925) 819-4794</p>
                        </div>
                        </a>

                        {/* <!-- Location --> */}
                        <a href="#"
                        class="flex items-center gap-4 p-4 bg-navy-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:translate-x-2 group">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-map-marker-alt text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Location</h4>
                            <p class="text-blue-200 text-sm">San Ramon, CA</p>
                        </div>
                        </a>
                    </div>

                    {/* <!-- Social Links --> */}
                    <div class="pt-6">
                        <h4 class="text-white font-medium mb-4">Follow Me</h4>
                        <div class="flex gap-4">
                        {/* <!-- LinkedIn --> */}
                        <a href="https://www.linkedin.com/in/adeyemi-aladesuyi-426a9b244/"
                            class="w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 flex items-center justify-center text-blue-200 hover:text-blue-400 transition-all duration-300 hover:border-cyan-400/40 hover:translate-y-1"
                            title="LinkedIn">
                            <FaLinkedin size={22} />
                        </a>

                        {/* <!-- GitHub --> */}
                        <a href="https://github.com/nukimoya"
                            class="w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 flex items-center justify-center text-blue-200 hover:text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:translate-y-1"
                            title="GitHub">
                                <FaGithub size={22} />
                            
                        </a>
                        

                        {/* <!-- twitter --> */}
                        <a href="https://x.com/ayothemsft"
                            class="w-12 h-12 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 flex items-center justify-center text-blue-200 hover:text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:translate-y-1"
                            title="X">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path d="M20.49 3.5h-3.89l-3.37 4.35-3.64-4.35H2.62l6.81 8.23-6.81 8.77h3.89l3.61-4.65 3.88 4.65h6.49l-7.25-8.94 7.25-8.01z"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30'>
                        <div className='flex items-center gap-3 mb-2'>
                            <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                            <p className='text-white font-semibold'>Available for Work!</p>
                        </div>
                        <p className='text-green-200 text-sm'>
                            Open to Full-time, Part-time and Freelance oppurtunities
                        </p>
                    </div>
                    </div>
                    {/* Right Section - Contact Form */}
                    <div className='bg-navy-800/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8'>
                    <div className='mb-8'>
                        <h2 className="text-2xl font-bold mb-2 text-white">Send Me a Message</h2>
                        <p className="mb-2 text-blue-200">Fill out the form below and I'll get back to you as soon as possible.</p>
                    </div>
                    <form class="space-y-6" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div class="grid sm:grid-cols-2 gap-6">
                            {/* <!-- Name Input --> */}
                            <div>
                            <label for="name" class="block text-blue-200 text-sm font-medium mb-2">Your Name *</label>
                            <div class="relative">
                                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1em" width="1em">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                                </svg>
                                <input id="name" name="name" type="text" required placeholder="Enter your name"
                                    class="w-full pl-10 pr-4 py-3 bg-navy-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300" />
                            </div>
                            </div>

                            {/* <!-- Email Input --> */}
                            <div>
                            <label for="email" class="block text-blue-200 text-sm font-medium mb-2">Your Email *</label>
                            <div class="relative">
                                <svg stroke="currentColor"
                                    fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em">
                                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                                </svg>
                                <input id="email" name="email" type="email" required placeholder="Enter your email"
                                    class="w-full pl-10 pr-4 py-3 bg-navy-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300" />
                            </div>
                            </div>
                        </div>

                        {/* <!-- Subject Input --> */}
                        <div>
                            <label for="subject" class="block text-blue-200 text-sm font-medium mb-2">Subject *</label>
                            <input id="subject" name="subject" type="text" required placeholder="What's this about?"
                                class="w-full px-4 py-3 bg-navy-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300" />
                        </div>

                        {/* <!-- Message Textarea --> */}
                        <div>
                            <label for="message" class="block text-blue-200 text-sm font-medium mb-2">Message *</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project or idea..."
                                    class="w-full px-4 py-3 bg-navy-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-vertical"></textarea>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                                >
                                <span>{buttonText}</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="text-sm group-hover:translate-x-1 transition-transform duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                                </svg>
                        </button>
                    </form>

                        <div className='mt-10 pt-6 border-t border-blue-500/20'>
                            <p className='text-blue-300 text-sm text-center'>
                                <span className='text-blue-400 mt-5'>Response Time:</span> Usually Between 12 hours
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='relative bg-gradient-to-b from navy-900 via-navy-950 to-black text-white my-16 overflow hidden'>
                <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparetm via-blue-500/30 to-transparent'></div>
                <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-16 py16'>
                    <div className=' grid lg:grid-cols-4 md:grid-cols-4 gap-12 fade-in'>
                        <div className="lg:col-span-2 md:col-span-2">
                            <div className='mb-6 w-48'>
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
                            
                            <p className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-md">
                                Building scalable systems and crafting seamless digital experiences.
                                Always learning, always growing.
                             </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">tw</a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">in</a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">gh</a>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-bold text-cyan-300 mb-2">Quick Links</h3>
                            <ul className="text-blue-100 space-y-2">
                                <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
                                <li><a href="#projects" className="hover:text-cyan-300 transition">Projects</a></li>
                                <li><a href="#skills" className="hover:text-cyan-300 transition">Skills</a></li>
                                <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-bold text-cyan-300 mb-2">Get In Touch</h3>
                            <div className="mb-2 text-blue-100">Let's connect and build something amazing together.</div>
                            <a href="#contact" className="inline-block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 px-6 rounded-lg hover:scale-105 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">Let's Connect</a>
                        </div>
                    </div>
                </div>
                <div className='border-t border-blue-500/10 bg-black/30 backdeop-blur-sm '>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm'>
                        <div className='flex items-center gap-2 text-blue-100/60'>
                            <span>
                                ""
                                "2025"
                                " Made with"
                            </span>
                            <span>
                                by Samuel Adelakun
                            </span>
                        </div>
                        <div className='text-blue-100/50 text-xs'>
                            <span>Built with React and Tailwind CSS</span>
                        </div>
                    </div>
                </div>
        </footer>
        <button className=''></button>
    </div>
    )
}
export default LandingPage;