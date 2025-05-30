import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Typewriter from 'typewriter-effect';

// import { useState } from 'react'


import SkillsSection from '../components/skillsection'
import ProfessionalSkills from '../components/professionalskills'
import TechStack from '../components/techstackk'
import ProjectShowcase from '../components/projectshowcase'
import projects from '../components/projects';
import SkillTabs from '../components/aboutcategories'
import Navbar from '../components/navbar'

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
            <section className='flex flex-col items-center justify-center text-center pt-32 pb-20 relative z-10 fade-in' 
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

                {/* <div className="max-w-3xl text-sm md:text-2xl text-blue-100 mb-8">
                    Building scalable systems that solve real problems. Computer Science graduate with 2+ years of full-stack experience in TypeScript, React, Node.js, Django & AI-Driven Development. Passionate about cloud-native development, AI-powered solutions, and crafting seamless digital experiences.
                </div> */}

                <div className="max-w-3xl text-sm md:text-2xl text-blue-100 mb-8 px-5 py-3 bg-white/6 border border-white/10 shadow-md rounded-lg backdrop-blur-lg">
                    Building scalable systems that solve real problems. Computer Science graduate with 2+ years of full-stack experience in TypeScript, React, Node.js, Django & AI-Driven Development. Passionate about cloud-native development, AI-powered solutions, and crafting seamless digital experiences.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-500 hover:to-cyan-600 transition-all duration-300">
                    My Resume
                    </button>
                    <button className="px-8 py-3 rounded-lg bg-white/10 text-cyan-300 font-semibold border border-cyan-400 shadow hover:bg-cyan-600 hover:text-white transition-all duration-300">
                    Get in Touch
                    </button>
                </div>
            </section>
            {/* About Section */}
            <section className="glass max-w-5xl mx-auto my-16 p-10 fade-in" id='about'>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">About Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8'>
                    <div className='flex justify-center md:justify-start'>
                        {/* Profile image placeholder, can be replaced later */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-blue-900 shadow-lg flex items-center justify-center text-3xl font-bold text-white">SA</div>
                    </div>
                    <div className='md:col-span-2'>
                        <h3 className="text-xl font-semibold mb-2 text-blue-200">Software Engineer</h3>
                        <p className="text-blue-100 mb-2">I am a software developer with a strong foundation in full-stack development (React.js, Node.js, Flutter) and a growing expertise in cloud computing. I enjoy building scalable, user-friendly applications and optimizing backend systems for performance and efficiency.</p>
                        <p className="text-blue-100">I thrive in collaborative, fast-paced environments where I can solve real-world problems, contribute meaningful solutions, and continue learning. My goal is to merge software development and cloud computing to build robust, scalable systems that drive innovation.</p>
                    </div>
                </div>
                <SkillTabs />
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Interests & Passions</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>      
                        <div className='col-span-1 glass p-4'>
                            <h4 className="font-bold text-blue-200 mb-1">Technology & Innovation</h4> 
                            <p className="text-blue-100">Passionate about AI, blockchain, and cloud computing, always exploring emerging trends and their real-world impact.</p>
                        </div>
                        <div className='col-span-1 glass p-4'>
                            <h4 className="font-bold text-blue-200 mb-1">Music</h4> 
                            <p className="text-blue-100">A fan of diverse genres that inspire creativity and enhance focus during development sessions.</p>
                        </div>
                        <div className='col-span-1 glass p-4'>
                            <h4 className="font-bold text-blue-200 mb-1">Movies & History</h4> 
                            <p className="text-blue-100">Enjoy historical films, thrillers, and documentaries that explore significant events and untold stories.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section className="glass max-w-6xl mx-auto my-16 p-10 fade-in" id='projects'>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">Featured Projects</h2>
                <p className="text-blue-100 mb-8">A showcase of my recent work in full-stack development, AI integration, and mobile applications</p>
                <ProjectShowcase projects={projects} />
            </section>
            {/* Skills Section */}
            <section className="glass max-w-6xl mx-auto my-16 p-10 fade-in" id='skills'>
                <h2 className="text-3xl font-bold text-center mb-2 text-cyan-300">Skills & Expertise</h2>
                <p className="text-center text-blue-100 mb-6">A comprehensive overview of my technical skills and the tools I use to build innovative solutions</p>
                <SkillsSection />
                <h3 className="text-2xl font-bold mt-10 mb-2 text-blue-200">Tech Stack</h3>
                <p className="text-blue-100 mb-6">The technologies I use to build powerful, scalable, and intelligent applications</p>
                <TechStack />
                <ProfessionalSkills/>
                <div className='mt-8'>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-2">Currently Learning</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='col-span-1 glass p-4'>AWS Cloud Practitioner</div>
                        <div className='col-span-1 glass p-4'>Cloud Architecture</div>
                        <div className='col-span-1 glass p-4'>Artificial Intelligence</div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="glass max-w-5xl mx-auto my-16 p-10 fade-in" id='contact'>
                <h1 className="text-3xl font-bold text-cyan-300 mb-4">Let's Connect</h1>
                <p className="text-blue-100 mb-8">Have an exciting project in mind or want to explore collaboration opportunities? I'd love to hear from you and discuss how we can bring your vision to life.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-200">Get In Touch</h2>
                        <p className="mb-4 text-blue-100">I'm currently available for full-time opportunities, part-time opportunities, and freelance projects. Whether you have a question, want to start a project, or just want to say hello, I'd be happy to hear from you.</p>
                        {/* Contact Info */}
                        <div className="grid grid-cols-6 gap-3 items-center mb-4">
                            <div className="col-span-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">@</div>
                            </div>
                            <div className="col-span-5">
                                <h3 className="font-medium text-blue-200">Email</h3>
                                <p className="text-blue-100">sayomikun123@gmail.com</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 items-center mb-4">
                            <div className="col-span-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">📞</div>
                            </div>
                            <div className="col-span-5">
                                <h3 className="font-medium text-blue-200">Phone</h3>
                                <p className="text-blue-100">+1 (925) 819-4794</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 items-center mb-4">
                            <div className="col-span-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">📍</div>
                            </div>
                            <div className="col-span-5">
                                <h3 className="font-medium text-blue-200">Location</h3>
                                <p className="text-blue-100">San Ramon, CA</p>
                            </div>
                        </div>
                        {/* Social Media */}
                        <p className="mt-6 mb-2 font-semibold text-blue-200">Follow Me</p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">in</a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">gh</a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold hover:scale-110 transition">tw</a>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-blue-200">Available for Work</h2>
                            <p className="text-blue-100">Open to freelance projects and full-time opportunities.</p>
                        </div>
                    </div>
                    {/* Right Section - Contact Form */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-200">Send Me a Message</h2>
                        <p className="mb-4 text-blue-100">Fill out the form below and I'll get back to you as soon as possible.</p>
                        <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1 font-medium text-blue-200">Your Name*</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full border border-cyan-400 bg-white/10 p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 font-medium text-blue-200">Your Email*</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full border border-cyan-400 bg-white/10 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block mb-1 font-medium text-blue-200">Subject*</label>
                                <input type="text" id="subject" name="subject" placeholder="What's this about?" required className="w-full border border-cyan-400 bg-white/10 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium text-blue-200">Message*</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or idea..." required className="w-full border border-cyan-400 bg-white/10 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 px-6 rounded-full hover:scale-105 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">{buttonText}</button>
                            <p className="mt-2 text-sm text-blue-200">Response Time: <span className="font-medium text-white">Usually within 24 hours</span></p>
                        </form>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className='glass max-w-6xl mx-auto my-16 p-10 grid grid-cols-1 md:grid-cols-4 gap-8 fade-in'>
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2">Samuel.dev</h3>
                    <div className="text-blue-100 mb-4">Building scalable systems and crafting seamless digital experiences. Always learning, always growing.</div>
                    <div className="flex space-x-4">
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
            </footer>
    </div>
    )
}
export default LandingPage;