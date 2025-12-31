import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GameMenuProps {
  onRestart: () => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onRestart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Menü Butonu */}
      {/* DÜZELTME: border-brand-cyan ve text-brand-cyan ile tamamen dinamik yapıldı */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-game-card border border-brand-cyan/30 rounded-full text-brand-cyan hover:bg-brand-cyan hover:text-game-bg transition-all shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Açılır Menü */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-game-card border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
          <button 
            onClick={() => { setIsOpen(false); onRestart(); }}
            // DÜZELTME: hover:text-brand-neon yerine hover:text-brand-cyan (ANA RENK)
            className="w-full text-left px-4 py-3 text-sm text-game-text hover:bg-white/5 hover:text-brand-cyan transition-colors border-b border-white/5"
          >
            ↻ Tekrar Oyna
          </button>
          <button 
            onClick={handleHome}
            className="w-full text-left px-4 py-3 text-sm text-status-error hover:bg-status-error/10 transition-colors"
          >
            ⌂ Ana Sayfaya Dön
          </button>
        </div>
      )}
    </div>
  );
};

export default GameMenu;