import React from 'react';
import { ArrowLeftIcon } from './Icons';

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
      {/* White Circular Button with Teal Glow */}
      <button
        onClick={onClick}
        className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#30e4e4] focus:ring-offset-2 z-10"
        style={{
          boxShadow: '0 0 60px rgba(230, 255, 253, 1), 0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 80px rgba(230, 243, 255, 1), 0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 60px rgba(230, 255, 253, 1), 0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        <ArrowLeftIcon 
          className="text-[#2B2B2B]" 
          size={20}
        />
      </button>
    </div>
  );
};

export default BackButton; 