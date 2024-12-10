import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { projects } from '../../data/projects-data';

export const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
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