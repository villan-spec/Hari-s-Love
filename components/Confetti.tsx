import React from 'react';

const Confetti: React.FC = () => {
    const confettiPieces = Array.from({ length: 100 });
    const colors = ['bg-brand-pink', 'bg-brand-blue', 'bg-brand-lavender', 'bg-yellow-300', 'bg-green-300'];

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-50">
            {confettiPieces.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                };
                const color = colors[i % colors.length];
                const size = Math.random() > 0.5 ? 'w-2 h-4' : 'w-3 h-3 rounded-full';

                return (
                    <div
                        key={i}
                        className={`absolute top-0 opacity-0 animate-confettiFall ${color} ${size}`}
                        style={style}
                    ></div>
                );
            })}
        </div>
    );
};

export default Confetti;
