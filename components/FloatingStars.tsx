import React from 'react';
import { SparkleIcon } from './icons';

const FloatingStars: React.FC = () => {
    const elements = Array.from({ length: 20 });

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {elements.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 15}s`,
                };
                const size = `${Math.random() * 15 + 5}px`;
                const colorClass = ['text-yellow-300/70', 'text-white/70', 'text-blue-200/70'][i % 3];

                return (
                    <div
                        key={i}
                        className="absolute bottom-0 opacity-0 animate-ambientFloat"
                        style={style}
                    >
                        <SparkleIcon className={colorClass} style={{ width: size, height: size }}/>
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingStars;
