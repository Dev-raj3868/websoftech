
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your business operations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 transform border border-blue-100 hover:border-blue-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-blue-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
