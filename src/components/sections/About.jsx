import React from 'react';
import { Section } from '../ui/Section';

export const About = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-gray-400">
            I'm a Software Engineering student at the University of Calgary, expected to graduate in May 2026. 
            My journey in tech has led me through various roles, from Backend Development to Protection & Controls.
          </p>
          <div>
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Programming / Web</h4>
                <p className="text-gray-400">C, C++, CSS, Python, Java, JavaScript, HTML, SQL, R, C#</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
                <p className="text-gray-400">Bootstrap, Flask, React, Docker, Git, MATLAB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="font-semibold">University of Calgary</h4>
            <p className="text-gray-400">Bachelor of Science in Software Engineering</p>
            <p className="text-gray-400">Expected Graduation: May 2026</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Coursework</h4>
            <ul className="text-gray-400 list-disc list-inside">
              <li>Probability, Statistics and Machine Learning</li>
              <li>Programming Fundamentals of C and C++</li>
              <li>Full Stack Web Development</li>
              <li>Information Security</li>
            </ul>
          </div>
        </div>
      </div>
      <ChevronDown 
        className="absolute bottom-8 animate-bounce cursor-pointer"
        size={32}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      />
    </Section>
  );
};