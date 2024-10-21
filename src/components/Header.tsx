import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">OptimaConnect</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#successes" className="text-gray-700 hover:text-blue-600">Successes</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <a href="#services" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#successes" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Successes</a>
          <a href="#blog" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Blog</a>
          <a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;