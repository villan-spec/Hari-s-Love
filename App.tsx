import React, { useState, useMemo, useEffect } from 'react';
import Envelope from './components/Envelope';
import Card from './components/Card';
import Puzzle from './components/Puzzle';
import HiddenMessage from './components/HiddenMessage';
import FloatingElements from './components/FloatingElements';
import FloatingStars from './components/FloatingStars';
import FloatingSuns from './components/FloatingSuns';
import FloatingBubbles from './components/FloatingBubbles';
import FloatingKeys from './components/FloatingKeys';
import Confetti from './components/Confetti';
import { HeartIcon, MoonIcon, CookieIcon, SunIcon, WaveIcon, KeyIcon } from './components/icons';

type CardState = 'closed' | 'opening' | 'puzzle' | 'revealing' | 'revealed';

const App: React.FC = () => {
    const [cardState, setCardState] = useState<CardState>('closed');
    const [showConfetti, setShowConfetti] = useState(false);

    const scenarios = useMemo(() => [
        {
            id: 'moon',
            quiz: {
                question: 'Guess who loves you more than anything in the whole wide world?',
                answer: 'you',
                hint: 'Hint: It\'s "you" 😉'
            },
            message: {
                text: 'I love you to the moon & back',
                Icon: () => <MoonIcon className="text-yellow-300" />,
            },
            background: {
                initial: 'bg-gradient-to-br from-brand-blue to-brand-lavender',
                revealed: 'bg-gradient-to-br from-indigo-900 via-gray-900 to-black'
            },
            floatingElements: {
                Initial: FloatingElements,
                Revealed: FloatingStars
            },
        },
        {
            id: 'cookies',
            quiz: {
                question: 'What\'s sweeter than a cookie and loves you a whole bunch?',
                answer: 'you',
                hint: 'Hint: The answer is still "you"! 🥰'
            },
            message: {
                text: 'I love you more than cookies!',
                Icon: () => (
                    <div className="relative flex items-center justify-center">
                        <CookieIcon className="text-amber-800" />
                        <HeartIcon className="absolute text-red-500 w-1/2 h-1/2 opacity-80 animate-heartbeat" />
                    </div>
                ),
            },
            background: {
                initial: 'bg-gradient-to-br from-yellow-100 to-amber-300',
                revealed: 'bg-gradient-to-br from-amber-200 via-orange-400 to-red-500'
            },
            floatingElements: {
                Initial: FloatingElements,
                Revealed: FloatingElements
            },
        },
        {
            id: 'sunshine',
            quiz: {
                question: 'What brightens up my whole day with just a smile?',
                answer: 'you',
                hint: 'Hint: Just type "you"! 😊'
            },
            message: {
                text: 'You are my sunshine',
                Icon: () => <SunIcon className="text-yellow-400" />,
            },
            background: {
                initial: 'bg-gradient-to-br from-sky-300 to-blue-200',
                revealed: 'bg-gradient-to-br from-sky-400 via-yellow-300 to-orange-400'
            },
            floatingElements: {
                Initial: FloatingElements,
                Revealed: FloatingSuns
            },
        },
        {
            id: 'ocean',
            quiz: {
                question: 'My love for you is as deep as the...?',
                answer: 'ocean',
                hint: 'Hint: It\'s a vast body of water! 🌊'
            },
            message: {
                text: 'My love for you is deeper than the ocean',
                Icon: () => <WaveIcon className="text-blue-400" />,
            },
            background: {
                initial: 'bg-gradient-to-br from-cyan-200 to-blue-400',
                revealed: 'bg-gradient-to-br from-blue-800 via-teal-900 to-indigo-900'
            },
            floatingElements: {
                Initial: FloatingElements,
                Revealed: FloatingBubbles
            },
        },
        {
            id: 'key',
            quiz: {
                question: 'Who holds the key to my heart?',
                answer: 'you',
                hint: 'Hint: The answer is YOU! 🔑'
            },
            message: {
                text: 'You hold the key to my heart',
                Icon: () => <KeyIcon className="text-amber-500" />,
            },
            background: {
                initial: 'bg-gradient-to-br from-rose-200 to-pink-300',
                revealed: 'bg-gradient-to-br from-red-500 via-rose-700 to-red-900'
            },
            floatingElements: {
                Initial: FloatingElements,
                Revealed: FloatingKeys
            },
        }
    ], []);

    const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

    useEffect(() => {
        const lastScenarioIndex = localStorage.getItem('lastScenarioIndex');
        const lastIndex = lastScenarioIndex ? parseInt(lastScenarioIndex, 10) : -1;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * scenarios.length);
        } while (scenarios.length > 1 && randomIndex === lastIndex);

        localStorage.setItem('lastScenarioIndex', randomIndex.toString());
        setSelectedScenario(scenarios[randomIndex]);
    }, [scenarios]);


    const handleOpenEnvelope = () => {
        setCardState('opening');
        setTimeout(() => {
            setCardState('puzzle');
        }, 1200);
    };

    const handleSolvePuzzle = () => {
        setShowConfetti(true);
        setCardState('revealing');
        setTimeout(() => {
            setCardState('revealed');
        }, 1500);
    };

    const isRevealedState = cardState === 'revealing' || cardState === 'revealed';
    const backgroundClass = isRevealedState ? selectedScenario.background.revealed : selectedScenario.background.initial;
    
    const FloatingInitial = selectedScenario.floatingElements.Initial;
    const FloatingRevealed = selectedScenario.floatingElements.Revealed;
    
    return (
        <div className={`relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden transition-all duration-1000 ${backgroundClass}`}>
            {isRevealedState ? <FloatingRevealed /> : <FloatingInitial />}
            {showConfetti && <Confetti />}
            
            <div className="z-10 w-full max-w-md">
                {cardState === 'closed' && <Envelope onClick={handleOpenEnvelope} />}
                
                {(cardState === 'opening' || cardState === 'puzzle' || cardState === 'revealing' || cardState === 'revealed') && (
                    <Card isOpening={cardState === 'opening'}>
                        {cardState === 'puzzle' && <Puzzle onSolve={handleSolvePuzzle} {...selectedScenario.quiz} />}
                        {(cardState === 'revealing' || cardState === 'revealed') && (
                            <HiddenMessage 
                                isRevealing={cardState === 'revealing'}
                                text={selectedScenario.message.text}
                                Icon={selectedScenario.message.Icon}
                            />
                        )}
                    </Card>
                )}
            </div>
        </div>
    );
};

export default App;