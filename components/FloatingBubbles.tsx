import React from 'react';

const FloatingBubbles: React.FC = () => {
    const elements = Array.from({ length: 20 });

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {elements.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 15}s`,
                };
                const size = `${Math.random() * 30 + 10}px`; // 10px to 40px
                const colorClass = ['border-white/50', 'border-cyan-200/50', 'border-blue-300/50'][i % 3];

                return (
                    <div
                        key={i}
                        className={`absolute bottom-0 opacity-0 animate-ambientFloat rounded-full border-2 ${colorClass}`}
                        style={{...style, width: size, height: size}}
                    />
                );
            })}
        </div>
    );
};

export default FloatingBubbles;
