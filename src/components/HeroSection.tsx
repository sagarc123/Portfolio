import React, { useState, useEffect } from 'react';
import { Play, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showCoin, setShowCoin] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [typingText, setTypingText] = useState('');
  
  const fullText = "Coding my journey with creativity, passion, and a love for the challenge—ready to play the next big game!";

  useEffect(() => {
    if (gameStarted && typingText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypingText(fullText.slice(0, typingText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [gameStarted, typingText, fullText]);

  const handleStart = () => {
    setShowCoin(true);
    setTimeout(() => {
      setGameStarted(true);
    }, 1000);
  };

  return (
    <section data-section="0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Arcade machine bezel frame */}
      <div className="relative">
        <div className="neon-border-animation rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
          <div className="bg-black rounded-2xl p-12 text-center relative overflow-hidden">
            
            {/* CRT effect */}
            <div className="crt-effect absolute inset-0 pointer-events-none" />
            
            {/* Coin animation */}
            {showCoin && (
              <div className="absolute top-4 right-4 animate-bounce">
                <div className="w-8 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 flex items-center justify-center text-xs font-bold">
                  $
                </div>
              </div>
            )}

            {/* Game title */}
            <h1 className="pixel-font text-4xl md:text-6xl text-neon-blue neon-glow mb-8 text-center">
              PORTFOLIO
            </h1>

            {/* Subtitle marquee */}
            <div className="text-2xl md:text-3xl text-neon-yellow neon-glow mb-8 pixel-font tracking-wider">
              ARCADE
            </div>

            {!gameStarted ? (
              <div className="space-y-8">
                <div className="text-xl text-neon-green blink pixel-font">
                  INSERT COIN TO BEGIN
                </div>
                
                <button
                  onClick={handleStart}
                  className="arcade-button group relative overflow-hidden"
                >
                  <Play className="inline-block mr-2 w-4 h-4" />
                  PRESS START
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-lg text-neon-green retro-font border-r-2 border-neon-green pr-2">
                  {typingText}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <div className="arcade-button bg-gradient-to-r from-purple-600 to-purple-800 border-neon-magenta text-neon-magenta">
                    <Zap className="inline-block mr-2 w-4 h-4" />
                    LEVEL: SENIOR
                  </div>
                  <div className="arcade-button bg-gradient-to-r from-green-600 to-green-800 border-neon-green text-neon-green">
                    EXP: Creative Explorer
                  </div>
                </div>

                <div className="text-sm text-gray-300 retro-font">
                  SCROLL DOWN TO CONTINUE
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Joystick navigation hint */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="joystick float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;