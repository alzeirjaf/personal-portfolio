import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">Iraj Akbar</h1>
        <p className="text-xl text-gray-400 mb-8">Software Engineer | Data Systems Developer</p>
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/alzeirjaf" 
             className="hover:text-blue-400 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/irajakbar" 
             className="hover:text-blue-400 transition-colors"
             target="_blank" 
             rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:irajxakbar@gmail.com" 
             className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <ChevronDown 
        className="absolute bottom-8 animate-bounce cursor-pointer"
        size={32}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  );
};