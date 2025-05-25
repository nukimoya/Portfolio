const techStack = [
  { name: "React", category: "Frontend", image: "path/to/your/image.jpg" },
  { name: "Node.js", category: "Backend", image: "path/to/your/image.jpg" },
  { name: "JavaScript", category: "Language", image: "path/to/your/image.jpg" },
  { name: "Python", category: "Language", image: "path/to/your/image.jpg" },
  { name: "HTML", category: "Frontend", image: "path/to/your/image.jpg" },
  { name: "Express", category: "Framework", image: "path/to/your/image.jpg" },
  { name: "PostgreSQL", category: "Database", image: "path/to/your/image.jpg" },
  { name: "MySQL", category: "Database", image: "path/to/your/image.jpg" },
  { name: "MongoDB", category: "Database", image: "path/to/your/image.jpg" },
  { name: "Tailwind", category: "Styling", image: "path/to/your/image.jpg" },
  { name: "Bootstrap", category: "Styling", image: "path/to/your/image.jpg" },
  { name: "Git", category: "Version Control", image: "path/to/your/image.jpg" },
  { name: "GitHub", category: "Platform", image: "path/to/your/image.jpg" },
  { name: "AWS", category: "Cloud", image: "path/to/your/image.jpg" },
  { name: "GCP", category: "Cloud", image: "path/to/your/image.jpg" },
];

export default function TechStack() {
  return (
    <div className="text-white">
      <h3 className="text-2xl font-bold mb-2">Tech Stack</h3>
      <p className="text-gray-400 mb-4">
        The technologies I use to build powerful, scalable, and intelligent applications
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="col-span-1 bg-zinc-900 rounded-lg p-3 text-center shadow hover:shadow-md transition"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-12 h-12 mx-auto mb-2 object-contain"
            />
            <p className="font-semibold">{tech.name}</p>
            <p className="text-xs text-gray-400">{tech.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
