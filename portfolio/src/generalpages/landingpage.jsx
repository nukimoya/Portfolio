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
import ScrollToTopButton from '../components/topbutton';

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
            <footer className='relative bg-gradient-to-b from navy-900 via-navy-950 to-black text-white mt-5 overflow-hidden'>
                <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparetm via-blue-500/30 to-transparent'></div>
                <div className='relative z-10 max-w-7xl mx-auto px-8 sm:px-16 py-16'>
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
                             <div class="flex items-center gap-4">
                                {/* <!-- LinkedIn Link --> */}
                                <a 
                                    href="https://www.linkedin.com/in/samuel-adelakun-ba1a2a346" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="LinkedIn" 
                                    class="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-800/50 backdrop-blur-sm border border-blue-500/20 text-blue-200 hover:text-white hover:border-blue-400/40 hover:bg-navy-700/60 transition-all duration-300 hover:scale-105"
                                >
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    stroke-width="0" 
                                    viewBox="0 0 448 512" 
                                    height="1em" 
                                    width="1em" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 
                                    108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 
                                    29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 
                                    0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 
                                    42.69-48.3 87.88-48.3 94 0 111.28 61.9 
                                    111.28 142.3V448z">
                                    </path>
                                    </svg>
                                </a>

                                {/* <!-- GitHub Link --> */}
                                <a 
                                    href="https://github.com/nukimoya" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="GitHub" 
                                    class="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-800/50 backdrop-blur-sm border border-blue-500/20 text-blue-200 hover:text-white hover:border-blue-400/40 hover:bg-navy-700/60 transition-all duration-300 hover:scale-105"
                                >
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    stroke-width="0" 
                                    viewBox="0 0 496 512" 
                                    height="1em" 
                                    width="1em" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 
                                    0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 
                                    2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
                                    2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 
                                    5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
                                    8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 
                                    239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                                    0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 
                                    0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 
                                    25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 
                                    8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 
                                    0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
                                    2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 
                                    41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 
                                    48.1-33.6 69-27 13.7 34.7 5.2 61.4 
                                    2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 
                                    0 96.5-58.9 104.2-114.8 110.5 
                                    9.2 7.9 17 22.9 17 46.4 
                                    0 33.7-.3 75.4-.3 83.6 
                                    0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 
                                    496 362.9 496 252 496 113.3 383.5 8 244.8 8z">
                                    </path>
                                    </svg>
                                </a>

                                {/* <!-- Twitter Link --> */}
                                <a 
                                    href="https://x.com/ayothemsft" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Twitter" 
                                    class="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-800/50 backdrop-blur-sm border border-blue-500/20 text-blue-200 hover:text-white hover:border-blue-400/40 hover:bg-navy-700/60 transition-all duration-300 hover:scale-105"
                                >
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    stroke-width="0" 
                                    viewBox="0 0 512 512" 
                                    height="1em" 
                                    width="1em" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 
                                    0 138.72-105.583 298.558-298.558 298.558-59.452 
                                    0-114.68-17.219-161.137-47.106 8.447.974 16.568 
                                    1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 
                                    6.498.974 12.995 1.624 19.818 1.624 
                                    9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299 
                                    c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 
                                    0-19.492 5.197-37.36 14.294-52.954 
                                    51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 
                                    0-57.828 46.782-104.934 104.934-104.934 
                                    30.213 0 57.502 12.67 76.67 33.137 
                                    23.715-4.548 46.456-13.32 66.599-25.34-7.798 
                                    24.366-24.366 44.833-46.132 57.827 
                                    21.117-2.273 41.584-8.122 60.426-16.243-14.292 
                                    20.791-32.161 39.308-52.628 54.253z">
                                    </path>
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                            <nav className="space-y-3">
                                <a href="#about" className="block text-blue-100/70 hover:text-blue-100 transition-colors duration-300 text-sm hover:translate-x-1 transform">About</a>
                                <a href="#projects" className="block text-blue-100/70 hover:text-blue-100 transition-colors duration-300 text-sm hover:translate-x-1 transform">Projects</a>           
                                <a href="#skills" className="block text-blue-100/70 hover:text-blue-100 transition-colors duration-300 text-sm hover:translate-x-1 transform">Skills</a>
                                <a href="#contact" className="block text-blue-100/70 hover:text-blue-100 transition-colors duration-300 text-sm hover:translate-x-1 transform">Contact</a>
                                <a href="#blog" className="block text-blue-100/70 hover:text-blue-100 transition-colors duration-300 text-sm hover:translate-x-1 transform">Blog</a>
                            </nav>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                <p className='text-blue-100/70 text-sm'>
                                    Let's connect and build something amazing together.
                                </p>
                                <a href="#contact" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm font-medium group">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" 
                                    class="text-xs group-hover:scale-110 transition-transform duration-300" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5
                                        48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7
                                        22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6
                                        35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256
                                        320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7
                                        173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5
                                        64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4
                                        128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                    </svg>
                                    Let's Connect
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='border-t border-blue-500/10 bg-black/30 backdeop-blur-sm '>
                    <div className='max-x-7xl mx-auto px-8 sm:px-16 py-6'>
                        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm'>
                            <div className='flex items-center gap-2 text-blue-100/60'>
                                <span>
                                    ©
                                    2025
                                    Made
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
                </div>
        </footer>
        <ScrollToTopButton />
    </div>
    )
}
export default LandingPage;