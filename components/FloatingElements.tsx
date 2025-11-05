import React from 'react';
import { HeartIcon } from './icons';

const FloatingElements: React.FC = () => {
    const elements = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {elements.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
                    animationDelay: `${Math.random() * 15}s`,
                };
                const size = `${Math.random() * 40 + 20}px`; // 20px to 60px
                const colorClass = ['text-brand-pink/50', 'text-brand-lavender/50', 'text-white/50'][i % 3];

                return (
                    <div
                        key={i}
                        className="absolute bottom-0 opacity-0 animate-ambientFloat"
                        style={style}
                    >
                        <HeartIcon className={colorClass} style={{ width: size, height: size }}/>
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingElements;
