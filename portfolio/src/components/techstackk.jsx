const techStack = [
  { name: "React", category: "Frontend", image: "/react-removebg-preview.png" },
  { name: "Node.js", category: "Backend", image: "/nodejs-removebg-preview.png" },
  { name: "JavaScript", category: "Language", image: "/javascript.png" },
  { name: "Python", category: "Language", image: "/python_-removebg-preview.png" },
  { name: "HTML", category: "Frontend", image: "/html-removebg-preview.png" },
  { name: "Express", category: "Framework", image: "/new-express-removebg-preview (1).png" },
  { name: "PostgreSQL", category: "Database", image: "/postgress-removebg-preview.png" },
  // { name: "MySQL", category: "Database", image: "/mysql-removebg-preview.png" },
  // { name: "MongoDB", category: "Database", image: "/mongo-removebg-preview.png" },
  { name: "Tailwind", category: "Styling", image: "/tailwind-removebg-preview.png" },
  { name: "Bootstrap", category: "Styling", image: "/bootsrap-removebg-preview.png" },
  { name: "Git", category: "Version Control", image: "/git-removebg-preview.png" },
  { name: "GitHub", category: "Platform", image: "/new-github-removebg-preview.png" },
  { name: "AWS", category: "Cloud", image: "/new-aws-removebg-preview.png" },
  { name: "GCP", category: "Cloud", image: "/gcp-removebg-preview.png" },
];

export default function TechStack() {
  return (
    <div className="text-center my-12">
      <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Tech Stack</h3>
      <p className="text-lg text-blue-200 max-w-3xl mx-auto">
        The technologies I use to build powerful, scalable, and intelligent applications
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="p-3 text-center group bg-navy-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-cyan-400/40
             transition-all duration-300 hover:transform hover:translate-y-2 hover:shadow-lg hover:shadow-blue-500/10"
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
