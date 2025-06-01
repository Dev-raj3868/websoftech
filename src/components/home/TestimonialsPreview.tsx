
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: 'Arjun Mehta',
      position: 'CEO, TechCorp',
      text: 'Websoftech transformed our entire IT infrastructure. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'CTO, InnovateLabs',
      text: 'Outstanding support and expertise. They delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Rohit Gupta',
      position: 'Director, StartupHub',
      text: 'Professional team with deep technical knowledge. Great partnership!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 transform">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 hover:scale-105 transform"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
