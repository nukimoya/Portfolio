import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import SkillsSection from '../components/skillsection'
import ProfessionalSkills from '../components/professionalskills'
import TechStack from '../components/techstackk'
import ProjectShowcase from '../components/projectshowcase'
import projects from '../components/projects';

const LandingPage = () => {


    return (
    <div className="landing-page">
        <div className="landing-page-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills.</p>
        </div>
        <div className="landing-page-image">
        <img src="path/to/your/image.jpg" alt="Landing Page" />
        </div>
        <div>
            <h2>Featured Projects</h2>
            <p>A showcase of my recent work in full-stack
                 development, AI integration, and mobile applications
            </p>
            <ProjectShowcase projects={projects} />
            
        </div>
        <div className=''>
            <h2 className="text-3xl font-bold text-center mb-2">Skills & Expertise</h2>
            <p className="text-center text-gray-400 mb-6">
                A comprehensive overview of my technical skills and the tools I use to build innovative solutions
            </p>
             <SkillsSection />
            <h3>Tech Stack</h3>
            <p>The technologies I use to build powerful, scalable, and intelligent applications</p>
            <TechStack />
            <ProfessionalSkills/>
            <div className=''>
                <h3>Currently Learning</h3>
                <div className='grid grid-cols-3 gap-1'>
                    <div className='col-span-1'>
                        AWS Cloud Practitioner
                    </div>
                    <div className='col-span-1'>
                        Cloud Architecture
                    </div>
                    <div className='col-span-1'>
                        Artificial Intelligence
                    </div>
                </div>
            </div>
        </div>
        <div>
  <h1>Let's Connect</h1>
  <p>
    Have an exciting project in mind or want to explore collaboration opportunities?
    I'd love to hear from you and discuss how we can bring your vision to life.
  </p>

  <div className="grid grid-cols-2 gap-6 mt-8">
    {/* Left Section */}
    <div>
      <h2 className="text-xl font-semibold mb-2">Get In Touch</h2>
      <p className="mb-4">
        I'm currently available for full-time opportunities, part-time opportunities,
        and freelance projects. Whether you have a question, want to start a project,
        or just want to say hello, I'd be happy to hear from you.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-6 gap-3 items-center mb-4">
        <div className="col-span-1">
          <img src="path/to/email-icon.jpg" alt="Email Icon" />
        </div>
        <div className="col-span-5">
          <h3 className="font-medium">Email</h3>
          <p>sayomikun123@gmail.com</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 items-center mb-4">
        <div className="col-span-1">
          <img src="path/to/phone-icon.jpg" alt="Phone Icon" />
        </div>
        <div className="col-span-5">
          <h3 className="font-medium">Phone</h3>
          <p>+1 (925) 819-4794</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 items-center mb-4">
        <div className="col-span-1">
          <img src="path/to/location-icon.jpg" alt="Location Icon" />
        </div>
        <div className="col-span-5">
          <h3 className="font-medium">Location</h3>
          <p>San Ramon, CA</p>
        </div>
      </div>

      {/* Social Media */}
      <p className="mt-6 mb-2 font-semibold">Follow Me</p>
      <div className="flex space-x-4">
        <img src="path/to/linkedin-icon.jpg" alt="LinkedIn" className="w-6 h-6" />
        <img src="path/to/github-icon.jpg" alt="GitHub" className="w-6 h-6" />
        <img src="path/to/twitter-icon.jpg" alt="Twitter" className="w-6 h-6" />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Available for Work</h2>
        <p>Open to freelance projects and full-time opportunities.</p>
      </div>
    </div>

    {/* Right Section - Contact Form */}
    <div>
      <h2 className="text-xl font-semibold mb-2">Send Me a Message</h2>
      <p className="mb-4">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Your Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1 font-medium">Subject*</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-medium">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project or idea..."
            required
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
        <p className="mt-2 text-sm text-gray-500">
          Response Time: <span className="font-medium text-black">Usually within 24 hours</span>
        </p>
      </form>
    </div>
  </div>
</div>

        <footer className='grid grid-cols-4 gap-4"'>
            <div class="col-span-2">
                <h3>Samuel.dev</h3>
                <div>
                    Building scalable systems and crafting
                     seamless digital experiences. Always learning,
                      always growing.
                </div>
                <div>
                    <a href="">Twitter</a>
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                </div>
            </div>
            <div class="col-span-1">
                <h3>Quick Links</h3>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="col-span-1">
                <h3>Get In Touch</h3>
                <div>

                </div>
                <div>
                    <a href="">Lets Connect</a>
                </div>
                
            </div>
        </footer>
    </div>
    )
}
export default LandingPage;