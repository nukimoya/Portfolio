import { useState } from "react";

const categories = {
  "Frontend Development": ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Flutter"],
  "Backend Development": ["Node.js", "Express.js", "Django", "PHP", "Laravel"],
  "Database Management": ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  "Tools & Technologies": ["Git", "GitHub", "Figma", "VS Code", "Postman"],
};

const SkillCard = ({ name }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center w-32">
    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-2" />
    <p className="text-sm">{name}</p>
  </div>
);

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend Development");

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-2">Skills & Expertise</h2>
      <p className="text-center text-gray-400 mb-6">
        A comprehensive overview of my technical skills and the tools I use to build innovative solutions
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === category
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {categories[activeTab].map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
