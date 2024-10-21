import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Transform your digital presence with AI and automation
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          OptimaConnect: Your partner in cutting-edge digital marketing solutions
        </p>
        <div className="space-x-4">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            Discover our services
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white inline-flex items-center transition duration-300"
          >
            Request a consultation
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;