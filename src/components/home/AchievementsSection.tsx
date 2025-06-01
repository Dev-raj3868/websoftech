
import React from 'react';
import { Award, Users, Clock, Globe } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '50+', label: 'Countries Served' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 group-hover:scale-110 transform">
                <achievement.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{achievement.number}</h3>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
