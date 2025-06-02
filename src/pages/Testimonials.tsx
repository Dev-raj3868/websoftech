
import React from 'react';
import { Star, Quote } from 'lucide-react';
import Layout from '../components/Layout';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun Mehta',
      position: 'CEO, TechCorp Solutions',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'Websoftech transformed our entire IT infrastructure. Their cloud migration strategy reduced our costs by 40% while improving performance significantly. Highly recommended!'
    },
    {
      name: 'Priya Reddy',
      position: 'CTO, InnovateLabs',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'The cybersecurity solutions provided by Websoftech have given us peace of mind. Their proactive approach to threat detection has prevented several potential breaches.'
    },
    {
      name: 'Rohit Sharma',
      position: 'IT Director, RetailPlus',
      company: 'RetailPlus',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding support and expertise! Websoftech helped us modernize our legacy systems, resulting in improved efficiency and customer satisfaction.'
    },
    {
      name: 'Anjali Gupta',
      position: 'Founder, StartupHub',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'As a startup, we needed scalable IT solutions that could grow with us. Websoftech delivered exactly that with their flexible cloud infrastructure.'
    },
    {
      name: 'Vikram Singh',
      position: 'Operations Manager, ManufacturePro',
      company: 'ManufacturePro',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'The digital transformation project led by Websoftech revolutionized our manufacturing processes. We saw a 35% increase in operational efficiency.'
    },
    {
      name: 'Sunita Patel',
      position: 'Head of IT, FinanceFirst',
      company: 'FinanceFirst',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face',
      rating: 5,
      text: 'Websoftech\'s data analytics solutions have transformed how we make business decisions. The insights we now have are invaluable for strategic planning.'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                  <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Satisfaction</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our client satisfaction metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Client Satisfaction' },
              { number: '95%', label: 'Project Success Rate' },
              { number: '90%', label: 'Client Retention' },
              { number: '24/7', label: 'Support Availability' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven IT solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
