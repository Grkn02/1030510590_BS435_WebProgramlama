import React from 'react';

interface RulesDisplayProps {
  rulesText: string;
}

const RulesDisplay: React.FC<RulesDisplayProps> = ({ rulesText }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-game-card/50 border border-white/5 rounded-xl p-6 relative overflow-hidden group">
        {/* Dekoratif Çizgi */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan to-brand-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* DÜZELTME: Başlık Rengi text-brand-cyan (ANA RENK) */}
        <h3 className="text-brand-cyan font-bold tracking-wider text-sm mb-2 flex items-center gap-2">
            <span className="animate-pulse">●</span> GÖREV DETAYLARI
        </h3>
        
        <p className="text-game-muted text-sm leading-relaxed">
            {rulesText}
        </p>
    </div>
  );
};

export default RulesDisplay;