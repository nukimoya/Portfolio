import React from 'react';

const InterestsSection = () => {
  return (
    <div className="mt-10 p-7 pb-10 border border-cyan-300/20 shadow-lg shadow-cyan-400/10 rounded-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-white-100 mb-4">Interests & Passions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-blue-900/30 rounded-xl border border-blue-500/10 transition-all duration-300 hover:scale-105">
          <h4 className="text-cyan-300 mb-1">Technology & Innovation</h4>
          <p className="text-blue-100">
            Passionate about AI, blockchain, and cloud computing, always exploring emerging trends and their real-world impact.
          </p>
        </div>
        <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/10 transition-all duration-300 hover:scale-105">
          <h4 className="text-cyan-300 mb-1">Music</h4>
          <p className="text-blue-100">
            A fan of diverse genres that inspire creativity and enhance focus during development sessions.
          </p>
        </div>
        <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/10 transition-all duration-300 hover:scale-105">
          <h4 className="text-cyan-300 mb-1">Movies & History</h4>
          <p className="text-blue-100">
            Enjoy historical films, thrillers, and documentaries that explore significant events and untold stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
