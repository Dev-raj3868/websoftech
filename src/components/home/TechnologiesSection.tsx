
import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'React',
    'Angular', 'Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver robust and scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200 hover:scale-105 transform">
              <p className="font-semibold text-gray-800">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
