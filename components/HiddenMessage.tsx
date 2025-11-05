import React from 'react';
import { SparkleIcon } from './icons';

interface HiddenMessageProps {
    isRevealing: boolean;
    text: string;
    Icon: React.FC;
}

const HiddenMessage: React.FC<HiddenMessageProps> = ({ isRevealing, text, Icon }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-6 ${isRevealing ? 'animate-fadeIn' : 'opacity-100'}`}>
             <div className="relative flex items-center justify-center text-center">
                <SparkleIcon className="absolute -top-8 -left-12 w-10 h-10 text-yellow-300" style={{ animation: 'heartbeat 2s infinite 0.1s' }} />
                <SparkleIcon className="absolute -bottom-6 -right-10 w-8 h-8 text-brand-blue" style={{ animation: 'heartbeat 2s infinite 0.3s' }} />
                <SparkleIcon className="absolute top-10 -right-14 w-6 h-6 text-white" style={{ animation: 'heartbeat 2s infinite 0.5s' }} />
            
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 tracking-tight leading-tight">
                    {text}
                </h1>
             </div>
            <div className="flex items-center justify-center gap-4 text-8xl mt-4" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <Icon />
            </div>
            <p className="text-xl text-gray-600 mt-2">Always and forever.</p>
        </div>
    );
};

export default HiddenMessage;