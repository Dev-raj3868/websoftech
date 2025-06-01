
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our IT solutions can help your business grow and succeed in the digital age.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200 hover:scale-105 transform"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
