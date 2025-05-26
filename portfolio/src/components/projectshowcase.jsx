import React from 'react';

const ProjectShowcase = ({ projects = [] }) => {
  return (
    <div className="space-y-20 px-6 md:px-16 py-16">
      {projects.map((project, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              isReversed ? 'md:flex-row-reverse' : ''
            } items-center gap-12`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-sm text-blue-400 font-semibold">
                {project.tag}
              </p>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>

              {/* Key Features */}
              <div className="bg-gray-900 rounded-xl p-4 mt-4 border border-gray-700">
                <h4 className="text-cyan-400 font-semibold mb-2">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <button>See More Projects On Github</button>
    </div>
  );
};

export default ProjectShowcase;
