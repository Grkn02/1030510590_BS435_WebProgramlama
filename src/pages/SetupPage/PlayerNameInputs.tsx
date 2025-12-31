import React from 'react';

interface PlayerNameInputsProps {
  playerCount: number;
  onNamesChange: (names: string[]) => void;
}

const PlayerNameInputs: React.FC<PlayerNameInputsProps> = ({ playerCount, onNamesChange }) => {
  const [names, setNames] = React.useState<string[]>(Array(playerCount).fill(''));

  const handleChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
    onNamesChange(newNames);
  };

  // Oyuncu sayısı değişirse inputları resetle/güncelle
  React.useEffect(() => {
    setNames(prev => {
        const newArr = Array(playerCount).fill('');
        for(let i=0; i<Math.min(prev.length, playerCount); i++) newArr[i] = prev[i];
        return newArr;
    });
  }, [playerCount]);
  
  // Parent'a güncel isimleri bildir
  React.useEffect(() => {
     onNamesChange(names);
  }, [names, onNamesChange]);

  return (
    <div className="space-y-3 w-full max-w-lg mx-auto">
      <label className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] ml-1">
        Ajan Kimlikleri
      </label>
      <div className="space-y-3">
        {Array.from({ length: playerCount }).map((_, index) => (
          <div key={index} className="relative group">
            <input
              type="text"
              value={names[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`${index + 1}. Oyuncu Adı`}
              // DÜZELTME: focus:border-brand-cyan (ANA RENK) yapıldı
              className="w-full bg-game-card border border-white/10 rounded-lg py-3 px-4 text-game-text 
                         focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan
                         transition-all duration-300 placeholder-game-muted"
            />
            <div className="absolute right-3 top-3.5 text-brand-cyan opacity-50 group-hover:opacity-100 transition-opacity">
               {/* Küçük ikon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerNameInputs;