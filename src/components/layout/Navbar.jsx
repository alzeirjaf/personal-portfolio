import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wider">IRAJ.DEV</a>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};