import React from 'react';
import { motion } from 'motion/react';

interface VectorDecorProps {
  className?: string;
  type?: 'grid' | 'circles' | 'lines' | 'dots';
  color?: string;
  opacity?: number;
}

const VectorDecor: React.FC<VectorDecorProps> = ({ 
  className = "", 
  type = 'grid', 
  color = "currentColor", 
  opacity = 0.05 
}) => {
  const renderPattern = () => {
    switch (type) {
      case 'grid':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        );
      case 'circles':
        return (
          <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 800 800">
            <motion.circle 
              cx="400" cy="400" r="300" 
              fill="none" stroke={color} strokeWidth="0.5" 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.circle 
              cx="400" cy="400" r="200" 
              fill="none" stroke={color} strokeWidth="0.5" 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        );
      case 'lines':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="line-pattern" width="100" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="100" y2="0" stroke={color} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#line-pattern)" />
          </svg>
        );
      case 'dots':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill={color} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} style={{ opacity }}>
      {renderPattern()}
    </div>
  );
};

export default VectorDecor;
