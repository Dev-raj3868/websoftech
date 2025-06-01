
import React from 'react';
import { ArrowRight, Shield, Zap, Users, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  const stats = [
    { icon: Shield, label: '99.9% Uptime', value: 'Reliability' },
    { icon: Zap, label: '24/7 Support', value: 'Always Available' },
    { icon: Users, label: '500+ Clients', value: 'Trusted Partners' },
  ];

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

  const achievements = [
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '50+', label: 'Countries Served' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 group-hover:scale-110 transform">
                  <achievement.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Preview */}
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'React',
              'Angular', 'Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200 hover:scale-105 transform">
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Websoftech?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Certified professionals with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="text-gray-600">Successfully delivered 1000+ projects across various industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective Solutions</h3>
                    <p className="text-gray-600">Optimized solutions that deliver maximum ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Agile Methodology</h3>
                    <p className="text-gray-600">Fast delivery with iterative development approach</p>
                  </div>
                </div>
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

      {/* Client Testimonials Preview */}
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
            {[
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
            ].map((testimonial, index) => (
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

      {/* CTA Section */}
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
    </Layout>
  );
};

export default Index;
