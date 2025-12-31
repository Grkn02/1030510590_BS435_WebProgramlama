import React from 'react';
import GameMenu from './GameMenu';

interface ScoreHeaderProps {
  currentRound: number;
  maxRounds: number;
  currentPlayerName: string;
  currentScore: number;
  playerCount: number;
  playerNames: string[];
  allScores: number[];
  turnIndex: number;
  onRestart: () => void;
}

const ScoreHeader: React.FC<ScoreHeaderProps> = ({
  currentRound, maxRounds, currentPlayerName, currentScore, 
  playerCount, playerNames, allScores, turnIndex, onRestart
}) => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 shrink-0">
      <div className="space-y-0.5">
        <h2 className="text-brand-cyan text-xs font-bold tracking-widest uppercase">
          TUR {Math.ceil(currentRound / playerCount)} / {maxRounds}
        </h2>
        <div className="text-xl md:text-2xl font-display font-bold">
          {currentPlayerName}: <span className="text-brand-cyan">{currentScore} Puan</span>
        </div>
        {playerCount > 1 && (
           <div className="text-[10px] text-game-muted">
              Diğer: {playerNames.map((n, i) => i !== turnIndex ? `${n}: ${allScores[i]} ` : '').join('')}
           </div>
        )}
      </div>
      <GameMenu onRestart={onRestart} />
    </div>
  );
};

export default ScoreHeader;