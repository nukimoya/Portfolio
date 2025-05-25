import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import SkillsSection from '../components/skillsection'
import ProfessionalSkills from '../components/professionalskills'
import TechStack from '../components/techstackk'

const LandingPage = () => {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 2000) // Simulate a loading time of 2 seconds

//     return () => clearTimeout(timer)
//   }, [])

//   if (loading) {
//     return <div className="loader">Loading...</div>
//   }

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
            <div className='...'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <p>Project 1</p>
                    </div>
                    <div className='col-span-1'>
                        <p>Info</p>
                    </div>
                </div>
                 <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <p>info</p>
                    </div>
                    <div className='col-span-1'>
                        <p>Project 2</p>
                    </div>
                </div>
                 <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <p>Project 3</p>
                    </div>
                    <div className='col-span-1'>
                        <p>Info</p>
                    </div>
                </div>
            </div>
            <button>See More Projects On Github</button>
        </div>
        <div className=''>
            <h2>Skills & Expertise</h2>
            <p>A comprehensive overview of my technical
                 skills and the tools I use to build innovative solutions
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
            <p>ave an exciting project in mind or want to explore collaboration
                 opportunities? I'd love to hear from you and discuss
                  how we can bring your vision to life.
            </p>
            <div class="grid grid-cols-2 gap-3">
                <div class="...">
                    <h2>
                        Get In Touch
                    </h2>
                    <p>I'm currently available for full-time opportunities, 
                        part-time oppurtunities and  freelance projects . Whether you have a question,
                         want to start a project, or just want to say hello, I'd be happy to hear from you.
                    </p>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-1'>
                            <img src="path/to/your/image.jpg" alt="Samuel" />
                        </div>
                        <div className='col-span-5'>
                            <h3>Email</h3>
                            <p>sayomikun123@gmail.com</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-1'>
                            <img src="path/to/your/image.jpg" alt="Samuel" />
                        </div>
                        <div className='col-span-5'>
                            <h3>Phone</h3>
                            <p>+1(925)819-4794</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-1'>
                            <img src="path/to/your/image.jpg" alt="Samuel" />
                        </div>
                        <div className='col-span-5'>
                            <h3>Location</h3>
                            <p>San Ramon, CA</p>
                        </div>
                    </div>
                    <p>Follow Me</p>
                    <div className='grid grid-cols-8 gap-1'>
                        <div className='col-span-1 col-start-1'>
                            <img src="path/to/your/image.jpg" alt="LinkedIn" />
                        </div>
                        <div className='col-span-1 col-start-2'>
                            <img src="path/to/your/image.jpg" alt="GitHub" />
                        </div>
                        <div className='col-span-1 col-start-3'>
                            <img src="path/to/your/image.jpg" alt="Twitter" />
                        </div>
                    </div>
                    <div>
                        <h2><span></span>Available for work</h2>
                        <p>Open to freelance projects and full-time opportunities</p>
                    </div>
                </div>
                <div class="...">
                    <h2>
                        Send Me a Message
                    </h2>
                    <p>Fill out the form below and I'll get back to you as soon as possible </p>
                    <form>
                        <div className='grid grid-cols-2'>
                            <div>
                                <label for="name">Your Name*</label>
                                <input type="text" id="name" name="name" placeholder='Enter Your Name' required />
                            </div>
                            <div>
                                <label for="email">Your Email*</label>
                                <input type="email" id="email" name="email"  placeholder='Enter Your email' required />
                            </div>
                        </div>
                        <div>
                            <label for="subject">Subject*</label>
                            <input type="text" id="subject" name="subject"  placeholder="What's this about?" required />
                        </div>
                        <div>
                            <label for="message">Message*</label>
                            <textarea id="message" name="message"  placeholder='Tell me about your project or idea...' required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                        <p>Response Time: <span>Usually Between 24 hours</span></p>
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