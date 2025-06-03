const topics = [
    { label: 'AWS Cloud Practitioner', bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/30' },
    { label: 'Cloud Architecture', bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' },
    { label: 'Artificial Intelligence', bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' },
  ];
  
  export default function CurrentlyLearning() {
    return (
    <div className="text-center mt-20">
      <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
        <h2 className="text-2xl lg:text-3xl text-white font-bold mb-4">Currently Learning</h2>
  
        <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${topic.bg} ${topic.text} ${topic.border}`}
              >
                {topic.label}
              </span>
            ))}
          </div>
      </div>
    </div>
    );
  }