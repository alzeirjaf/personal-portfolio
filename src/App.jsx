import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="text-4xl font-bold text-white tracking-widest animate-pulse">
          IRAJ AKBAR
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;