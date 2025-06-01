
import React from 'react';
import Layout from '../components/Layout';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services.',
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'Hybrid Cloud', 'Cloud Security'],
      color: 'bg-blue-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions.',
      features: ['Security Assessment', 'Threat Detection', 'Data Protection', 'Compliance'],
      color: 'bg-red-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'IT Infrastructure',
      description: 'Design, implement, and maintain robust IT infrastructure.',
      features: ['Network Setup', 'Server Management', 'Backup Solutions', 'Monitoring'],
      color: 'bg-green-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Digital Transformation',
      description: 'Transform your business processes with digital solutions.',
      features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Integration'],
      color: 'bg-purple-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Data Analytics',
      description: 'Turn your data into actionable business insights.',
      features: ['Business Intelligence', 'Data Warehousing', 'Reporting', 'Predictive Analytics'],
      color: 'bg-orange-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with business goals.',
      features: ['Technology Strategy', 'Project Management', 'Vendor Management', 'Cost Optimization'],
      color: 'bg-teal-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${service.color} h-2`}></div>
                <div className="p-8">
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 ${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Understanding your business needs and current infrastructure' },
              { step: '02', title: 'Planning', description: 'Developing a comprehensive strategy and roadmap' },
              { step: '03', title: 'Implementation', description: 'Executing the solution with minimal business disruption' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-xl font-bold rounded-full mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements and get a tailored solution for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
          >
            Get Quote
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
