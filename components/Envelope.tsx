import React, { useState } from 'react';
import { HeartIcon } from './icons';

interface EnvelopeProps {
    onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
        onClick();
    };

    return (
        <div 
            className="relative w-full aspect-[1.5/1] max-w-sm mx-auto cursor-pointer group"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleClick()}
            aria-label="Open the gift card envelope"
        >
            {/* Back of envelope */}
            <div className="absolute inset-0 bg-brand-pink rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"></div>
            
            {/* Top flap */}
            <div 
                className={`absolute top-0 left-0 right-0 h-1/2 bg-brand-pink rounded-t-lg shadow-md origin-top transition-transform duration-1000 ease-in-out ${isOpen ? 'rotate-x-180' : ''}`}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
                <div className="absolute inset-0 bg-[#ffb3c1] rounded-t-lg"></div>
            </div>

             {/* Left and right flaps */}
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-brand-pink" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-brand-pink" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>


            {/* Seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition-opacity duration-500">
                <HeartIcon className={`w-10 h-10 text-red-500 transition-all duration-300 group-hover:scale-110 ${isOpen ? 'opacity-0' : 'animate-heartbeat'}`} />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                Click to Open!
            </div>
        </div>
    );
};

// Custom CSS for 3D transform
const style = document.createElement('style');
style.innerHTML = `
    .rotate-x-180 {
        transform: rotateX(180deg);
    }
`;
document.head.appendChild(style);


export default Envelope;
