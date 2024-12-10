import React from 'react';

export const Section = ({ id, className = "", children, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-20 ${darker ? 'bg-black/50' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};