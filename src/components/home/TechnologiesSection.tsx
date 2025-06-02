
import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'React',
    'Angular', 'Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 border-y border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Technologies We Work With
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver robust and scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-blue-100 hover:border-blue-300 group">
              <p className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
