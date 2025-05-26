import React, { useState } from 'react';
import { FaMobileAlt, FaUsers, FaCode, FaServer } from 'react-icons/fa';

const tabs = [
  {
    title: 'Mobile Development',
    icon: <FaMobileAlt />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaMobileAlt className="text-blue-400" />
          Mobile Development
        </h2>
        <p>I develop cross-platform mobile applications using Flutter, with a focus on clean architecture, responsive design, and performance optimization.</p>
        <p className="mt-2">My experience includes building data-driven applications that connect to back-end services for dynamic and interactive functionality.</p>
      </>
    ),
  },
  {
    title: 'Teamwork & Collaboration',
    icon: <FaUsers />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaUsers className="text-blue-400" />
          Teamwork & Collaboration
        </h2>
        <p>I thrive in collaborative environments, actively participating in team discussions, sprint planning, and code reviews to ensure project success.</p>
        <p className="mt-2">My ability to communicate effectively and contribute meaningfully to group efforts enhances productivity and fosters strong team dynamics.</p>
      </>
    ),
  },
  {
    title: 'Web Development',
    icon: <FaCode />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaCode className="text-blue-400" />
          Web Development
        </h2>
        <p>I specialize in building responsive, high-performance web applications using React, Tailwind CSS, Node.js, and PostgreSQL.</p>
        <p className="mt-2">My projects prioritize user experience, accessibility, and modern UI design principles.</p>
      </>
    ),
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaServer />,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaServer className="text-blue-400" />
          Cloud & DevOps
        </h2>
        <p>I deploy scalable applications using services like AWS and Railway, with CI/CD pipelines and containerization via Docker.</p>
        <p className="mt-2">I focus on performance, uptime, and secure infrastructure to ensure seamless deployment and monitoring.</p>
      </>
    ),
  },
];

const SkillTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#0d1117] text-white  px-6 py-12">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 border-b border-gray-700 pb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
              activeIndex === idx
                ? 'bg-blue-600 text-white shadow'
                : 'bg-[#161b22] hover:bg-[#1f2937]'
            }`}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 bg-[#161b22] rounded-xl p-6 shadow-lg">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default SkillTabs;
