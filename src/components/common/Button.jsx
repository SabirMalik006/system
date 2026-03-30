import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', icon }) => {
    const variants = {
        primary: 'bg-[#1A8FA0] text-white hover:bg-[#167a89]',
        secondary: 'text-gray-600 border border-gray-200 hover:bg-gray-50',
        outline: 'border border-gray-200 text-gray-600 hover:bg-gray-50'
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 font-medium ${variants[variant]} ${className}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;