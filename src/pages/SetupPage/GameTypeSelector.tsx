import React from 'react';
import type { GameMode } from '../../types/GameTypes';

interface GameTypeSelectorProps {
  selectedMode: GameMode;
  onModeChange: (mode: GameMode) => void;
}

const GameTypeSelector: React.FC<GameTypeSelectorProps> = ({ selectedMode, onModeChange }) => {
  return (
    <div className="space-y-3 w-full max-w-lg mx-auto">
      {/* Etiket Rengi: Dinamik (Brand Cyan) */}
      <label className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] ml-1">
        Oyun Tipi (Görev)
      </label>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. SEÇENEK: NORMAL MOD (Temanın Ana Rengini Kullanır -> brand-cyan) */}
        <button
          onClick={() => onModeChange('standard')}
          className={`relative p-4 rounded-xl border text-left transition-all duration-300 group overflow-hidden
            ${selectedMode === 'standard' 
              // Seçiliyse: Ana Renk (Cyan/Kırmızı) parlaması
              ? 'bg-brand-cyan/10 border-brand-cyan shadow-[0_0_20px_rgba(var(--color-brand-cyan),0.3)]' 
              // Değilse: Sönük
              : 'bg-game-card border-white/5 hover:bg-game-card/80 hover:border-white/20'
            }`}
        >
          <div className="relative z-10">
            <div className={`text-sm font-bold mb-1 font-display ${selectedMode === 'standard' ? 'text-brand-cyan' : 'text-game-text'}`}>
              NORMAL MOD
            </div>
            <div className="text-xs text-game-muted">
              3 görselden hangisi <span className="font-bold text-brand-cyan">Yapay Zeka?</span>
            </div>
          </div>
        </button>

        {/* 2. SEÇENEK: TERS KÖŞE (Temanın İkincil Rengini Kullanır -> brand-purple) */}
        <button
          onClick={() => onModeChange('reverse')}
          className={`relative p-4 rounded-xl border text-left transition-all duration-300 group overflow-hidden
            ${selectedMode === 'reverse' 
              // Seçiliyse: İkincil Renk (Purple/Mavi) parlaması
              ? 'bg-brand-purple/10 border-brand-purple shadow-[0_0_20px_rgba(var(--color-brand-purple),0.3)]' 
              : 'bg-game-card border-white/5 hover:bg-game-card/80 hover:border-white/20'
            }`}
        >
          <div className="relative z-10">
            <div className={`text-sm font-bold mb-1 font-display ${selectedMode === 'reverse' ? 'text-brand-purple' : 'text-game-text'}`}>
              TERS KÖŞE
            </div>
            <div className="text-xs text-game-muted">
              3 görselden hangisi <span className="font-bold text-brand-purple">Gerçek?</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GameTypeSelector;