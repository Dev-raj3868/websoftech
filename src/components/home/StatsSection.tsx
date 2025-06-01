
import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Shield, label: '99.9% Uptime', value: 'Reliability' },
    { icon: Zap, label: '24/7 Support', value: 'Always Available' },
    { icon: Users, label: '500+ Clients', value: 'Trusted Partners' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional IT solutions with proven results and unwavering commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                <stat.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
