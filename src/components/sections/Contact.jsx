import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <Section id="contact" darker>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center gap-8">
          <Button 
            href="mailto:irajxakbar@gmail.com"
            variant="primary"
          >
            Email Me
          </Button>
          <Button 
            href="https://linkedin.com/in/irajakbar"
            variant="secondary"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </Section>
  );
};