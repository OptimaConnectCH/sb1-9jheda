import React from 'react';
import { Brain, Zap, Globe, Search } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Brain size={48} />,
      title: "AI-Powered Marketing",
      description: "Leverage cutting-edge AI to optimize your marketing strategies and drive results."
    },
    {
      icon: <Zap size={48} />,
      title: "Digital Automation",
      description: "Streamline your business processes with our advanced automation solutions."
    },
    {
      icon: <Globe size={48} />,
      title: "Modern Web Development",
      description: "Create stunning, responsive websites that engage and convert visitors."
    },
    {
      icon: <Search size={48} />,
      title: "Google Optimization",
      description: "Boost your online visibility with our expert SEO and SEA services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;