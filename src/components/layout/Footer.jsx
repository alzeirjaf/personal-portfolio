import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-black/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Iraj Akbar. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" 
               className="text-gray-400 hover:text-blue-400 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/irajakbar" 
               className="text-gray-400 hover:text-blue-400 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:irajxakbar@gmail.com" 
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};