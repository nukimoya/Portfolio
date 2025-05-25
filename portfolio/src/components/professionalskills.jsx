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
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-2">Professional Skills</h2>
      <p className="text-gray-400 mb-4">
        Essential soft skills that complement my technical expertise
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {softSkills.map((skill, index) => (
          <div key={index} className="col-span-1 flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
