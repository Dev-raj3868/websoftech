
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your{' '}
              <span className="text-blue-300">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-lg">
              Empowering businesses with cutting-edge IT solutions, cloud infrastructure, 
              and digital transformation strategies that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group hover:scale-105 transform"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-lg transition-colors duration-200 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/b654a72c-09c4-4310-9952-d7552e6f703a.png"
              alt="Modern Development Workspace"
              className="rounded-lg shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
