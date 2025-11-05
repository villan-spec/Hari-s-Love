import React from 'react';

interface CardProps {
    children: React.ReactNode;
    isOpening: boolean;
}

const Card: React.FC<CardProps> = ({ children, isOpening }) => {
    return (
        <div 
            className={`
                relative w-full aspect-[4/5] max-w-sm mx-auto bg-cream rounded-2xl shadow-2xl p-6 md:p-8 
                flex flex-col items-center justify-center text-center
                transition-transform duration-1000 ease-in-out
                ${isOpening ? 'scale-0' : 'scale-100'}
            `}
        >
            {children}
        </div>
    );
};

export default Card;
