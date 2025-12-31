import React, { useState } from "react";

interface GameModeButtonsProps { 
  onPlayerChange: (playerCount: number) => void;
}

const GameModeButtons: React.FC<GameModeButtonsProps> = ({ onPlayerChange }) => {
    // Not: Bu state aslında SetupPage'den de yönetilebilir ama burada kendi içinde de tutulabilir.
    // Görsel bütünlük için selected state'i prop olarak almak daha iyidir ama şimdilik basit tutuyoruz.
    const [playerCount, setPlayerCount] = useState<number>(1);

    const handlePlayerChange = (player: number) => {
        setPlayerCount(player);
        onPlayerChange(player);
    };

    return (
        <div className="space-y-3 w-full max-w-lg mx-auto">
             {/* Etiket Rengi: Dinamik (Brand Cyan) */}
            <label className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] ml-1">
                Oyuncu Sayısı
            </label>
            
            <div className="flex gap-4">
                {/* 1. SEÇENEK: 1 OYUNCU (Brand Cyan - Ana Renk) */}
                <button 
                    onClick={() => handlePlayerChange(1)}
                    className={`flex-1 py-4 px-6 rounded-lg font-display font-semibold transition-all duration-300 border
                        ${playerCount === 1 
                            ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(var(--color-brand-cyan),0.3)]' 
                            : 'bg-game-card border-white/5 text-game-muted hover:bg-game-card/80 hover:border-white/20'
                        }`}
                >
                    TEK OYUNCU
                </button>

                {/* 2. SEÇENEK: 2 OYUNCU (Brand Purple - İkincil Renk) */}
                <button 
                    onClick={() => handlePlayerChange(2)}
                    className={`flex-1 py-4 px-6 rounded-lg font-display font-semibold transition-all duration-300 border
                        ${playerCount === 2 
                            ? 'bg-brand-purple/20 border-brand-purple text-brand-purple shadow-[0_0_15px_rgba(var(--color-brand-purple),0.3)]' 
                            : 'bg-game-card border-white/5 text-game-muted hover:bg-game-card/80 hover:border-white/20'
                        }`}
                >
                    ÇOK OYUNCULU
                </button>
            </div>
        </div>
    );
}

export default GameModeButtons;