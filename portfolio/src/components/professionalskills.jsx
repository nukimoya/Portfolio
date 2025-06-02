const softSkills = [
  "Critical Thinking & Problem Solving",
  "Adaptability & Quick Learning",
  "Strong Communication Skills",
  "Team Collaboration",
  "Time Management & Multitasking",
  "Creative Problem-Solving",
];

export default function ProfessionalSkills() {
  return (
    <div className="bg-navy-800/30 backdrop-blur-sm text-center rounded-2xl p-8 my-15 border border-blue-500/20">
      <h2 className="text-2xl lg:text-3xl text-white font-bold mb-4">Professional Skills</h2>
      <p className="text-blue-200 mb-4">
        Essential soft skills that complement my technical expertise
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {softSkills.map((skill, index) => (
          <div key={index} className="col-span-1 flex items-center gap-3 p-4 bg-navy-700/30 rounded-lg border border-blue-500/10 hover:border-cyan-400/30 transition-colors duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-599 rounded-full flex-shrink-0" />
            <span className="text-blue-100 text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}