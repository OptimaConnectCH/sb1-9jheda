import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    content: "Bolt's AI-driven marketing strategies have revolutionized our online presence. We've seen a 200% increase in engagement!",
    rating: 5
  },
  {
    name: "Jane Smith",
    company: "Global Solutions Ltd.",
    content: "The automation tools provided by Bolt have streamlined our operations, saving us countless hours and resources.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    company: "StartUp Ventures",
    content: "Our website redesign by Bolt has been a game-changer. The modern, responsive design has significantly improved our conversion rates.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="flex overflow-x-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
                  <p className="text-lg mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 shadow-md">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 shadow-md">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;