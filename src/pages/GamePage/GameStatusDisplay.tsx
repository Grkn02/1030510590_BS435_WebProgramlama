import React from 'react';

interface GameStatusDisplayProps {
  gameStatus: 'playing' | 'round_end' | 'game_over';
  message: string;
  hint: string | null;
}

const GameStatusDisplay: React.FC<GameStatusDisplayProps> = ({ gameStatus, message, hint }) => {
  return (
    <div className={`text-center shrink-0 mb-4 transition-all ${gameStatus === 'round_end' ? 'scale-105' : ''}`}>
      <h1 className={`text-xl md:text-3xl font-bold font-display 
          ${gameStatus === 'playing' ? 'text-white' : 
            message.includes('TEBRİKLER') ? 'text-status-success' : 'text-status-error'}`}>
         {message}
      </h1>
      {hint && gameStatus === 'playing' && (
          <div className="mt-1 text-sm text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-lg inline-block animate-pulse">
              💡 {hint}
          </div>
      )}
    </div>
  );
};

export default GameStatusDisplay;