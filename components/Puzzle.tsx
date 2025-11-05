import React, { useState, FormEvent } from 'react';
import { SparkleIcon } from './icons';

interface PuzzleProps {
    onSolve: () => void;
    question: string;
    answer: string;
    hint: string;
}

const Puzzle: React.FC<PuzzleProps> = ({ onSolve, question, answer: correctAnswer, hint }) => {
    const [answer, setAnswer] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            onSolve();
        } else {
            setIsWrong(true);
            setTimeout(() => setIsWrong(false), 500); // Duration of shake animation
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-6 animate-fadeIn">
            <div className="relative text-center">
                <SparkleIcon className="absolute -top-4 -left-8 w-8 h-8 text-brand-blue animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700">{question}</h2>
                <SparkleIcon className="absolute -bottom-4 -right-8 w-8 h-8 text-brand-pink animate-pulse delay-500" />
            </div>

            <p className="text-lg md:text-xl text-gray-600">A special message is waiting...</p>

            <form onSubmit={handleSubmit} className={`w-full max-w-xs flex flex-col gap-4 ${isWrong ? 'animate-shake' : ''}`}>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full px-4 py-3 bg-white border-2 border-brand-tan rounded-full text-center text-gray-700 focus:outline-none focus:ring-4 focus:ring-brand-pink/50 transition-all duration-300"
                    aria-label="Your answer to the quiz"
                />
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-brand-pink text-white font-bold rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-brand-pink/50"
                >
                    Reveal my message!
                </button>
            </form>
            {isWrong && <p className="text-red-500 font-bold mt-2">{hint}</p>}
        </div>
    );
};

export default Puzzle;