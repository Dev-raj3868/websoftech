
import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className = "", width = 40, height = 40 }: LogoProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Main circle background */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" stroke="#1E3A8A" strokeWidth="2"/>
      
      {/* Technology pattern - represents connectivity and web */}
      <g fill="white" opacity="0.9">
        {/* Central node */}
        <circle cx="50" cy="50" r="8" fill="url(#centerGradient)"/>
        
        {/* Connection lines */}
        <line x1="50" y1="20" x2="50" y2="42" stroke="white" strokeWidth="2"/>
        <line x1="50" y1="58" x2="50" y2="80" stroke="white" strokeWidth="2"/>
        <line x1="20" y1="50" x2="42" y2="50" stroke="white" strokeWidth="2"/>
        <line x1="58" y1="50" x2="80" y2="50" stroke="white" strokeWidth="2"/>
        
        {/* Diagonal connections */}
        <line x1="35" y1="35" x2="42" y2="42" stroke="white" strokeWidth="2"/>
        <line x1="58" y1="42" x2="65" y2="35" stroke="white" strokeWidth="2"/>
        <line x1="35" y1="65" x2="42" y2="58" stroke="white" strokeWidth="2"/>
        <line x1="58" y1="58" x2="65" y2="65" stroke="white" strokeWidth="2"/>
        
        {/* Outer nodes */}
        <circle cx="50" cy="20" r="4" fill="white"/>
        <circle cx="50" cy="80" r="4" fill="white"/>
        <circle cx="20" cy="50" r="4" fill="white"/>
        <circle cx="80" cy="50" r="4" fill="white"/>
        <circle cx="35" cy="35" r="3" fill="white"/>
        <circle cx="65" cy="35" r="3" fill="white"/>
        <circle cx="35" cy="65" r="3" fill="white"/>
        <circle cx="65" cy="65" r="3" fill="white"/>
      </g>
      
      {/* W symbol in the center */}
      <text x="50" y="58" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">W</text>
    </svg>
  );
};

export default Logo;
