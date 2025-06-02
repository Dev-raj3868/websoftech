
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: 'Arjun Mehta',
      position: 'CEO, TechCorp',
      text: 'Websoftech transformed our entire IT infrastructure. Highly recommended!',
      rating: 5,
      image: '/lovable-uploads/c58fdf9c-39fa-4ad8-a331-5c21b6d9feb4.png'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO, InnovateLabs',
      text: 'Outstanding support and expertise. They delivered beyond our expectations.',
      rating: 5,
      image: '/lovable-uploads/ca7711ff-364b-403b-bf30-de4fa2277196.png'
    },
    {
      name: 'Rohit Gupta',
      position: 'Director, StartupHub',
      text: 'Professional team with deep technical knowledge. Great partnership!',
      rating: 5,
      image: '/lovable-uploads/b63ef650-6564-413b-a398-c200ba39cda8.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 border-y border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-700 italic mb-4">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
