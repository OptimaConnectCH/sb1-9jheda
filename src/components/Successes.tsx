import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

const SuccessCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="text-blue-600 mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Successes = () => {
  const successes = [
    {
      icon: <TrendingUp size={48} />,
      title: "+300% Traffic Growth",
      description: "Generated for our clients in just 6 months"
    },
    {
      icon: <Users size={48} />,
      title: "50+ Happy Clients",
      description: "From startups to Fortune 500 companies"
    },
    {
      icon: <Globe size={48} />,
      title: "Global Reach",
      description: "Clients in over 20 countries worldwide"
    }
  ];

  return (
    <section id="successes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Successes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successes.map((success, index) => (
            <SuccessCard key={index} {...success} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            View our case studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Successes;