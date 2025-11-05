import React from 'react';
import { KeyIcon } from './icons';

const FloatingKeys: React.FC = () => {
    const elements = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {elements.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 12}s`,
                    animationDelay: `${Math.random() * 15}s`,
                    transform: `rotate(${Math.random() * 90 - 45}deg)`
                };
                const size = `${Math.random() * 30 + 15}px`; // 15px to 45px
                const colorClass = ['text-yellow-200/60', 'text-amber-300/60', 'text-white/60'][i % 3];

                return (
                    <div
                        key={i}
                        className="absolute bottom-0 opacity-0 animate-ambientFloat"
                        style={style}
                    >
                        <KeyIcon className={colorClass} style={{ width: size, height: size }}/>
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingKeys;
