import React from 'react';
import { Section } from '../ui/Section';
import { experience } from '../../data/experience-data';

export const Experience = () => {
  return (
    <Section id="experience" darker>
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="group hover:bg-blue-500/10 p-6 rounded-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{job.title}</h3>
                <p className="text-gray-400">{job.company}</p>
              </div>
              <p className="text-gray-400">{job.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ChevronDown 
        className="absolute bottom-8 animate-bounce cursor-pointer"
        size={32}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      />
    </Section>
  );
};