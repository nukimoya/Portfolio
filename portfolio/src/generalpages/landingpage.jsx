import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

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
        <div className=''>
            <h2>Skills & Expertise</h2>
            <p>A comprehensive overview of my technical
                 skills and the tools I use to build innovative solutions
            </p>
            <div className='section'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='col-span-1'>
                        <img src="path/to/your/image.jpg" alt="react" /><span>Frontend Development</span>
                    </div>
                    <div className='col-span-1'>
                        <img src="path/to/your/image.jpg" alt="js" /><span>Backend Development</span>
                    </div>
                    <div className='col-span-1'>
                        <img src="path/to/your/image.jpg" alt="database" /><span>Database Managament</span>
                    </div>
                    <div className='col-span-1'>
                        <img src="path/to/your/image.jpg" alt="github" /><span>Tools & Technologies</span>
                    </div>
                </div>
            </div>
            <h3>Tech Stack</h3>
            <p>The technologies I use to build powerful, scalable, and intelligent applications</p>
            <div className='grid grid-cols-6 gap-2'>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>React</p>
                    <plaintext>Frontend</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Node.js</p>
                    <plaintext>Backend</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>JavaScript</p>
                    <plaintext>Language</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Python</p>
                    <plaintext>Language</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>HTML</p>
                    <plaintext>Frontend</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Express</p>
                    <plaintext>Framework</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>PostgreSQL</p>
                    <plaintext>Database</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>MySQL</p>
                    <plaintext>Database</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>MongoDB</p>
                    <plaintext>Database</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Tailwind</p>
                    <plaintext>Styling</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Bootstrap</p>
                    <plaintext>Styling</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>Git</p>
                    <plaintext>Version Control</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>GitHub</p>
                    <plaintext>Platform</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>AWS</p>
                    <plaintext>Cloud</plaintext>
                </div>
                <div className='col-span-1'>
                    <img src="path/to/your/image.jpg" alt="html" />
                    <p>GCP</p>
                    <plaintext>Cloud</plaintext>
                </div>
            </div>
            <div className=''>
                <h2>Professional Skills</h2>
                <p>Essential soft skills that complement my technical expertise</p>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-1'>
                        <p><span></span>Critical Thinking & Problem Solving</p>
                    </div>
                    <div className='col-span-1'>
                        <p><span></span>Adaptability & Quick Learning</p>
                    </div>
                    <div className='col-span-1'>
                        <p><span></span>Strong Communication Skills</p>
                    </div>
                    <div className='col-span-1'>
                        <p><span></span>Team Collaboration</p>
                    </div>
                    <div className='col-span-1'>
                        <p><span></span>Time Management & Multitasking</p>
                    </div>
                    <div className='col-span-1'>
                        <p><span></span>Creative Problem-Solving</p>
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