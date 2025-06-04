// import React, { useState } from 'react';

// const ProjectShowcase = ({ projects = [] }) => {
//   return (
//     <div className="space-y-20 px-6 md:px-16 py-16">
//       {projects.map((project, index) => {
//         const isReversed = index % 2 !== 0;
//         const [currentImage, setCurrentImage] = useState(0);

//         const handlePrev = () => {
//           setCurrentImage((prev) =>
//             prev === 0 ? project.images.length - 1 : prev - 1
//           );
//         };

//         const handleNext = () => {
//           setCurrentImage((prev) =>
//             prev === project.images.length - 1 ? 0 : prev + 1
//           );
//         };

//         return (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row ${
//               isReversed ? 'md:flex-row-reverse' : ''
//             } items-center gap-12`}
//           >
//             {/* Image Carousel Section */}
//             <div className="md:w-1/2 relative">
//               <img
//                 src={project.images[currentImage]}
//                 alt={`${project.title} screenshot ${currentImage + 1}`}
//                 className="rounded-xl shadow-lg w-full"
//               />
//               {project.images?.length > 1 && (
//                 <>
//                   <button onClick={handlePrev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3
//                     bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/80
//                     transition-all duration-300 opacity-70 hover:opacity-100 group-hover:opacity-100
//                     text-base sm:text-lg shadow-lg border border-white/20 hover:border-cyan-400/50
//                     hover:scale-110" aria-label="Previous image">
//                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
//                       height="1em"width="1em" xmlns="http://www.w3.org/2000/svg">
                      
//                           <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67
//                           22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32
//                             24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52
//                             272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
//                       </svg>
//                   </button>
//                   {/* <button
//                     onClick={handlePrev}
//                     className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full"
//                   >
//                     ‹
//                   </button> */}
//                   <button onClick={handleNext} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
//                     p-2 sm:p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/80
//                     transition-all duration-300 opacity-70 hover:opacity-100 group-hover:opacity-100
//                     text-base sm:text-lg shadow-lg border border-white/20 hover:border-cyan-400/50
//                     hover:scale-110" aria-label="Next image">
//                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0
//                       0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941
//                             0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484
//                             101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373
//                             24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
//                           </path>
//                       </svg>
//                   </button>


//                   {/* <button
//                     onClick={handleNext}
//                     className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full"
//                   >
//                     ›
//                   </button> */}
//                 </>
//               )}
//             </div>

//             {/* Text Section */}
//             <div className="md:w-1/2 text-left space-y-4">
//               <div className='flex flex-wrap items-center gap-2 sm:gap-4 mb-4'>
//                 <span className="px-2 sm:px-3 py-1 bg-blue-600/20 text-cyan-300 rounded-full text-xs
//                   sm:text-sm font-medium border border-blue-500/30">
//                     {project.tag}
//                 </span>
//                 <span className="text-blue-400 text-xs sm:text-sm font-medium">
//                     {project.date}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-lg sm:text-xl text-cyan-300 font-medium">{project.subtitle}</p>
//               </div>
              
//               <p className='text-blue-100 text-base sm:text-lg leading-relaxed'>{project.description}</p>

//               <div className="bg-navy-800/30 backdrop-blur-sm rounded-xl p-4 mt-4 border border-blue-500/20">
//                 <div className='flex items-center gap-2 mb-3 sm:mb-4'>
//                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
//                     className="text-cyan-400 text-sm sm:text-base" height="1em" width="1em"
//                     xmlns="http://www.w3.org/2000/svg">
//                       <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248
//                         248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196
//                         0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42
//                         42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627
//                         5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12
//                         12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
//                       </path>
//                   </svg>
//                   <h4 className="text-white font-semibold text-sm sm:text-base">Key Features</h4>
                  
//                 </div>
                
//                 <ul className="space-y-2">
//                   {project.features?.map((feature, idx) => (
//                     <li  key={idx}
//                     className='flex items-start gap-3'>
//                       <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className='text-blue-200 text-xs sm:text-sm'>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h4 className='text-white font-semibold mb-3 text-sm sm:text-base'>Technologies Used</h4>
//                 <div className='flex flex-wrap gap-2'>
//                   {project.technologies?.map((tech, idx) => (
//                     <span key={idx} className='px-2 sm:px-3 py-1 bg-navy-700/50 text-blue-200
//                       rounded-full text-xs sm:text-sm border border-blue-500/20 
//                       hover:border-cyan-400/40 transition-colors duration-300'>
//                         {tech}
//                     </span>
//                   ))}
//                 </div>
                
//               </div>
//               <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
//                   <a href={project.project_link} target="_blank" rel="noopener noreferrer" 
//                     class="inline-flex items-center justify-center gap-2 px-4
//                     sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600
//                     to-cyan-500 text-white font-medium rounded-lg shadow-lg
//                     shadow-blue-500/20 hover:shadow-blue-500/40 hover:translate-y-1
//                     transform transition duration-300 text-sm sm:text-base">
//                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
//                           class="text-xs sm:text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
//                         </svg>Live Demo
//                   </a>
                  
//                   <a href={project.project_git} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-400 text-blue-200 font-medium rounded-lg hover:bg-blue-500/10 transition duration-300 text-sm sm:text-base">
//                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" 
//                     class="text-xs sm:text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
//                         </path>
//                         </svg>View Code
//                   </a>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <button className="mt-10 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
//         See More Projects On Github
//       </button>
//     </div>
//   );
// };

// export default ProjectShowcase;
import React, { useState } from 'react';

const ProjectCard = ({ project, isReversed }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-12`}
    >
      {/* Image Carousel */}
      <div className="md:w-1/2 relative">
        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="rounded-xl shadow-lg w-full"
        />
        {project.images?.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 rounded-full text-white">
              ‹
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/70 rounded-full text-white">
              ›
            </button>
          </>
        )}
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-left space-y-4">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-blue-600/20 text-cyan-300 rounded-full text-sm border border-blue-500/30">
            {project.tag}
          </span>
          <span className="text-blue-400 text-sm font-medium">{project.date}</span>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-xl text-cyan-300 font-medium">{project.subtitle}</p>
        </div>

        <p className="text-blue-100 text-lg">{project.description}</p>

        {/* Features */}
        <div className="bg-navy-800/30 backdrop-blur-sm rounded-xl p-4 mt-4 border border-blue-500/20">
          <h4 className="text-white font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-blue-200 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-navy-700/50 text-blue-200 rounded-full text-sm border border-blue-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
          {project.project_link && (
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:translate-y-1 transform transition duration-300 text-sm sm:text-base"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs sm:text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
              Live Demo
            </a>
          )}

          {project.project_git && (
            <a
              href={project.project_git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-400 text-blue-200 font-medium rounded-lg hover:bg-blue-500/10 transition duration-300 text-sm sm:text-base"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="text-xs sm:text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = ({ projects = [] }) => {
  return (
    <div className="space-y-20 px-6 md:px-16 py-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProjectShowcase;
