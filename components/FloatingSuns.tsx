import React from 'react';
import { SunIcon } from './icons';

const FloatingSuns: React.FC = () => {
    const elements = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {elements.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 12}s`,
                    animationDelay: `${Math.random() * 15}s`,
                };
                const size = `${Math.random() * 25 + 10}px`;
                const colorClass = ['text-white/70', 'text-yellow-200/70', 'text-orange-300/70'][i % 3];

                return (
                    <div
                        key={i}
                        className="absolute bottom-0 opacity-0 animate-ambientFloat"
                        style={style}
                    >
                        <SunIcon className={colorClass} style={{ width: size, height: size }}/>
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingSuns;