import React from 'react';

export const Button = ({ children, variant = 'primary', href, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-colors";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-transparent border border-blue-500 hover:bg-blue-500/10 text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};