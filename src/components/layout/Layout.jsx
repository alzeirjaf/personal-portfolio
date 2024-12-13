import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  console.log('Layout rendering'); // Debug log
  return (
    <div className="relative min-h-screen bg-black"> {/* Added bg-black */}
      <Navbar />
      <main className="relative z-10 bg-opacity-50 bg-black"> {/* Added background */}
        {children}
      </main>
      <Footer />
    </div>
  );
};