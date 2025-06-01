
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience'
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully delivered 1000+ projects across various industries'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Optimized solutions that deliver maximum ROI'
    },
    {
      title: 'Agile Methodology',
      description: 'Fast delivery with iterative development approach'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Websoftech?
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Indian team collaboration"
              className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
