import React from 'react';
import type { GameImage } from '../../data/gameData';

interface ImageCardProps {
  image: GameImage;
  onClick: () => void;
  status: 'default' | 'eliminated' | 'correct' | 'wrong' | 'disabled';
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, status }) => {
  
  const getBorderColor = () => {
    switch (status) {
      case 'correct': return 'border-status-success shadow-[0_0_30px_rgba(16,185,129,0.6)] scale-105 z-10'; // Z-index eklendi
      case 'wrong': return 'border-status-error shadow-[0_0_30px_rgba(239,68,68,0.6)]';
      case 'eliminated': return 'border-gray-700 opacity-20 grayscale'; 
      case 'disabled': return 'border-gray-700 opacity-50';
      default: return 'border-white/10 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(var(--color-brand-cyan),0.4)] hover:-translate-y-1';
    }
  };

  return (
    // DÜZELTME: aspect-[3/4] KALDIRILDI. 
    // Yerine "h-full w-full relative" kullanıldı.
    <div 
      onClick={() => status === 'default' && onClick()}
      className={`relative h-full w-full rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 bg-game-card
        ${getBorderColor()}
      `}
    >
      <img 
        src={image.url} 
        alt="Game content" 
        // object-cover: Resmi kutuya doldurur
        // object-contain: Resmin tamamını gösterir (tercihe bağlı değiştirebilirsin)
        className="w-full h-full object-cover"
      />
      
      {status === 'eliminated' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
           <span className="text-6xl font-bold text-status-error opacity-80">✕</span>
        </div>
      )}
    </div>
  );
};

export default ImageCard;