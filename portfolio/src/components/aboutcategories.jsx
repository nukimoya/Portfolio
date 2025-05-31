import React, { useState } from 'react';
import { FaMobileAlt, FaUsers, FaCode, FaServer } from 'react-icons/fa';

const tabs = [
  {
    title: 'Web Development',
    icon: <FaCode />,
    content: (
      <div className="bg-transparent">
        <div className="flex items-center mb-6">
          <div className="mr-4 p-3 bg-blue-900/30 rounded-lg">
            <FaCode size={24} className="text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold mb-2 pt-2 text-white-100 flex items-center gap-1">Web Development</h2>
        </div>
        <p className="text-blue-100">
          As a final-year Computer Science student, I specialize in building scalable, responsive web applications using React.js, Node.js, and PostgreSQL.
          I focus on writing clean, efficient code while prioritizing user experience and accessibility.
        </p>
        <p className="mt-4 text-blue-100">
          My academic and internship projects have helped me develop strong full-stack skills, emphasizing performance optimization and modern UI design.
        </p>
      </div>
    ),
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaServer />,
    content: (
      <div className="background-transparent">
        <div className="flex items-center mb-6">
          <div className="mr-4 p-3 bg-blue-900/30 rounded-lg">
            <FaServer size={24} className="text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold mb-2 pt-2 text-white-100 flex items-center gap-1">Cloud & DevOps</h2>
        </div>
        <p className="text-blue-100">
          I deploy and manage scalable applications on cloud platforms like AWS and Railway, utilizing Docker containers and CI/CD pipelines for efficient delivery.
        </p>
        <p className="mt-4 text-blue-100">
          My growing knowledge in cloud infrastructure helps me focus on performance, security, and uptime in real-world development environments.
        </p>
      </div>
    ),
  },
  {
    title: 'Teamwork & Collaboration',
    icon: <FaUsers />,
    content: (
      <div className="background-transparent">
        <div className="flex items-center mb-6">
          <div className="mr-4 p-3 bg-blue-900/30 rounded-lg">
            <FaUsers size={24} className="text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold mb-2 pt-2 text-white-100 flex items-center gap-1">Teamwork & Collaboration</h2>
        </div>
        <p className="text-blue-100">
          I’ve worked on multiple university group projects and contributed during my internship, where I participated in collaborative planning, code reviews, and team discussions.
        </p>
        <p className="mt-4 text-blue-100">
          These experiences have sharpened my communication skills and taught me the importance of effective teamwork in delivering real-world software solutions.
        </p>
      </div>
    ),
  },
];



const SkillTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#0a1f3d] text-white rounded-xl my-15 px-6 py-6 border border-cyan-300/20 shadow-lg shadow-cyan-400/10 rounded-xl transition-all duration-300">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 border-b border-gray-700 pb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center gap-1 px-5 py-3 rounded-md transition-all ${
              activeIndex === idx
                ? 'bg-[#2f5c91] text-cyan-300 border-b-2 border-cyan-400 shadow'
                : 'bg-[#0a1f3d] text-blue-200 hover:bg-[#14335f] hover:text-blue-100'
            }`}
          >
            {tab.icon}<span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 rounded-xl px-5">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default SkillTabs;
