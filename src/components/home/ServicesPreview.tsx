
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: '☁️'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your business operations.',
      icon: '💼'
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions.',
      icon: '🚀'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: '🔒'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-105 transform">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 hover:scale-105 transform"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
