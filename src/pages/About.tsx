
import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your success is our priority. We build lasting partnerships.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their unique needs.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: '15+ years in IT leadership and digital transformation'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b913?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in cloud architecture and cybersecurity'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Specializes in project management and client relations'
    },
    {
      name: 'Neha Singh',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Full-stack developer with expertise in modern frameworks'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Websoftech</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses through innovative IT solutions since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, Websoftech began as a small team of passionate technologists 
                  with a vision to help businesses harness the power of technology. Over the years, 
                  we've grown into a trusted IT consultancy serving clients across various industries.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a relentless 
                  focus on delivering value to our clients. We've successfully navigated the digital 
                  transformation wave, helping hundreds of businesses modernize their operations.
                </p>
                <p>
                  Today, we're proud to be recognized as a leading IT services provider, known for 
                  our innovative solutions, expert team, and commitment to client success.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '50+', label: 'Team Members' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
