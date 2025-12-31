import { useState } from "react";
import RulesDisplay from "./RulesDisplay";
import PlayerNameInputs from "./PlayerNameInputs";
import GameModeButtons from "./GameModeButtons"; // Bu artık sadece Oyuncu Sayısı için
import GameTypeSelector from "./GameTypeSelector"; // YENİ: Oyun Tipi Seçici
import { useNavigate } from "react-router-dom";
import { useGame } from '../../contexts/GameContext';
import type { GameMode } from "../../types/GameTypes";

function SetupPage() {
  const { setGameState } = useGame();
  
  // State'ler
  const [playerCount, setPlayerCount] = useState<number>(1);
  const [selectedMode, setSelectedMode] = useState<GameMode>('standard'); // Mod State'i
  const [currentNames, setCurrentNames] = useState<string[]>([]);
  
  const navigate = useNavigate();

  const handleNamesChange = (names: string[]) => {
    setCurrentNames(names);
  };

  const handlePlayerChange = (player: number) => {
    setPlayerCount(player);
  };

  const handleStartGame = () => {
    // Validasyonlar
    if (currentNames.length !== playerCount) {
        alert(`Lütfen ${playerCount} oyuncu için isim giriniz.`);
        return;
    }
    const hasEmptyName = currentNames.some(name => name.trim() === '');
    if (hasEmptyName) {
        alert("Lütfen tüm oyuncu adlarını doldurunuz.");
        return;
    }

    // Context'e KAYIT (Artık gameMode'u da gönderiyoruz)
    setGameState({ 
      playerCount: playerCount,
      playerNames: currentNames,
      gameMode: selectedMode 
    });

    navigate('/game');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-game-bg text-game-text overflow-y-auto">
      <div className="w-full max-w-lg space-y-8 animate-fade-in py-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
           <h1 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
             AI vs REAL
           </h1>
           <p className="text-brand-cyan/80 tracking-[0.2em] text-sm uppercase">
             Görsel Turing Testi
           </p>
        </div>

        {/* Kurallar */}
        <RulesDisplay rulesText="Yapay zeka ile gerçek arasındaki sınırı görebiliyor musun? Modunu seç, tarafını belirle!"/>
        
        {/* Ayarlar Alanı */}
        <div className="space-y-6 bg-game-card/30 p-6 rounded-2xl border border-white/5">
           {/* 1. Oyun Tipi Seçimi (YENİ) */}
           <GameTypeSelector selectedMode={selectedMode} onModeChange={setSelectedMode} />

           {/* 2. Oyuncu Sayısı Seçimi */}
           <GameModeButtons onPlayerChange={handlePlayerChange} />
           
           {/* 3. İsim Girişleri */}
           <PlayerNameInputs playerCount={playerCount} onNamesChange={handleNamesChange}/>
        </div>

        {/* Başlat Butonu */}
        <button 
          onClick={handleStartGame}
          className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-lg font-bold text-white text-lg tracking-wider
                     hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          SİSTEME GİRİŞ YAP
        </button>

      </div>
    </div>
  );
}

export default SetupPage;