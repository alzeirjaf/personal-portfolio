import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Card = ({ title, description, tech, metrics, link, className = "" }) => {
  return (
    <div className={`group bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-6 
      hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300 ${className}`}>
      <a href={link} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="inline-flex items-center">
        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
          {title}
          <ExternalLink className="inline ml-2" size={20} />
        </h3>
      </a>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <p className="text-blue-400">{metrics}</p>
    </div>
  );
};