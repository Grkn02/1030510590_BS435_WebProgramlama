import React from 'react';

interface GameOverModalProps {
  isVisible: boolean;
  playerNames: string[];
  scores: number[];
  onRestart: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ isVisible, playerNames, scores, onRestart }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
        <div className="bg-game-card p-8 rounded-2xl border border-brand-cyan shadow-[0_0_50px_rgba(var(--color-brand-cyan),0.5)] text-center max-w-md w-full mx-4">
            <h2 className="text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple mb-6">
                OYUN BİTTİ!
            </h2>
            <div className="space-y-4 mb-8">
                {playerNames.map((name, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                        <span className="text-gray-300 text-lg">{name}</span>
                        <span className="font-bold text-2xl text-brand-cyan">{scores[i]} Puan</span>
                    </div>
                ))}
            </div>
            <button onClick={onRestart}
              className="w-full bg-gradient-to-r from-brand-cyan to-brand-purple text-white py-4 px-8 rounded-xl font-bold text-lg 
                         hover:shadow-[0_0_20px_rgba(var(--color-brand-cyan),0.6)] hover:scale-[1.02] transition-all"
            >
              ↻ YENİDEN BAŞLAT
            </button>
        </div>
    </div>
  );
};

export default GameOverModal;