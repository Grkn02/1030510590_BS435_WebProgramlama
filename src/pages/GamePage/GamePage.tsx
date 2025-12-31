import { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import { allImages, type GameImage } from '../../data/gameData';
import ImageCard from './ImageCard';
// YENİ BİLEŞENLERİ IMPORT EDİYORUZ
import ScoreHeader from './ScoreHeader';
import GameStatusDisplay from './GameStatusDisplay';
import GameOverModal from './GameOverModal';

const MAX_ROUNDS = 5;

function GamePage() {
  const { playerNames, playerCount, gameMode } = useGame();
  
  // --- STATE TANIMLARI (AYNEN KALIYOR) ---
  const [currentRound, setCurrentRound] = useState(1);
  const [turnIndex, setTurnIndex] = useState(0); 
  const [scores, setScores] = useState<number[]>(Array(playerCount).fill(0));
  const [activeImages, setActiveImages] = useState<GameImage[]>([]);
  const [targetId, setTargetId] = useState<string>(''); 
  const [gameStatus, setGameStatus] = useState<'playing' | 'round_end' | 'game_over'>('playing');
  const [message, setMessage] = useState<string>('');
  const [hint, setHint] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [eliminatedIds, setEliminatedIds] = useState<string[]>([]); 
  const [wrongGuessCount, setWrongGuessCount] = useState(0); 
  const [playedImageIds, setPlayedImageIds] = useState<string[]>([]);

  const currentPlayerName = playerNames[turnIndex] || 'Oyuncu';

  // --- OYUN MANTIĞI FONKSİYONLARI (AYNEN KALIYOR - Kopyala/Yapıştır yapabilirsin) ---
  // (startNewRound, handleImageClick, handleNext, restartGame buraya gelecek...)
  // Yer kaplamasın diye burayı kısalttım, senin elindeki fonksiyonların aynısı.
  
  const startNewRound = () => {
    let availablePool = allImages.filter(img => !playedImageIds.includes(img.id));
    if (availablePool.length < 3) {
        availablePool = [...allImages];
        setPlayedImageIds([]); 
    }
    const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
    let roundImages: GameImage[] = [];
    let correctImage: GameImage | undefined;

    if (gameMode === 'standard') {
      const ais = shuffled.filter(img => img.isAi);
      const reals = shuffled.filter(img => !img.isAi);
      if (ais.length < 1 || reals.length < 2) { setPlayedImageIds([]); startNewRound(); return; }
      roundImages = [...ais.slice(0, 1), ...reals.slice(0, 2)].sort(() => 0.5 - Math.random());
      correctImage = ais[0];
    } else {
      const ais = shuffled.filter(img => img.isAi);
      const reals = shuffled.filter(img => !img.isAi);
      if (reals.length < 1 || ais.length < 2) { setPlayedImageIds([]); startNewRound(); return; }
      roundImages = [...reals.slice(0, 1), ...ais.slice(0, 2)].sort(() => 0.5 - Math.random());
      correctImage = reals[0];
    }
    if (!correctImage) return;

    setPlayedImageIds(prev => [...prev, ...roundImages.map(img => img.id)]);
    setActiveImages(roundImages);
    setTargetId(correctImage.id);
    setGameStatus('playing');
    setMessage(gameMode === 'standard' ? 'Hangi görsel YAPAY ZEKA üretimi?' : 'Hangi görsel GERÇEK fotoğraf?');
    setHint(null);
    setSelectedId(null);
    setEliminatedIds([]);
    setWrongGuessCount(0);
  };

  useEffect(() => { startNewRound(); }, []);

  const handleImageClick = (image: GameImage) => {
    if (gameStatus !== 'playing' || eliminatedIds.includes(image.id)) return;
    setSelectedId(image.id);
    const isLastRound = currentRound >= MAX_ROUNDS * playerCount;

    if (image.id === targetId) {
      setGameStatus(isLastRound ? 'game_over' : 'round_end');
      setMessage(`TEBRİKLER ${currentPlayerName}! Doğru Cevap.`);
      const points = wrongGuessCount === 0 ? 100 : 50;
      const newScores = [...scores];
      newScores[turnIndex] += points;
      setScores(newScores);
    } else {
      if (wrongGuessCount === 0) {
        const targetImage = activeImages.find(img => img.id === targetId);
        setHint(`YANLIŞ! İpucu: ${targetImage?.hint || "Aradığın görselin detaylarına dikkat et."}`);
        setWrongGuessCount(1);
        setEliminatedIds(prev => [...prev, image.id]);
        setMessage("DİKKAT! Son bir hakkın kaldı.");
      } else {
        setGameStatus(isLastRound ? 'game_over' : 'round_end');
        setMessage("MAALESEF! Hakkın bitti. Puan alamadın.");
        setSelectedId(targetId); 
      }
    }
  };

  const handleNext = () => {
    if (currentRound >= MAX_ROUNDS * playerCount) { setGameStatus('game_over'); return; }
    if (playerCount > 1) { setTurnIndex(prev => (prev + 1) % playerCount); }
    setCurrentRound(prev => prev + 1);
    startNewRound();
  };

  const restartGame = () => {
      setPlayedImageIds([]); 
      setCurrentRound(1);
      setScores(Array(playerCount).fill(0));
      setTurnIndex(0);
      setTimeout(() => { startNewRound(); }, 0);
  };

  // --- TEMİZLENMİŞ UI RENDER ---
  return (
    <div className="h-screen w-screen bg-game-bg text-game-text flex flex-col overflow-hidden relative">
      
      {/* 1. COMPONENT: HEADER */}
      <ScoreHeader 
        currentRound={currentRound}
        maxRounds={MAX_ROUNDS}
        currentPlayerName={currentPlayerName}
        currentScore={scores[turnIndex]}
        playerCount={playerCount}
        playerNames={playerNames}
        allScores={scores}
        turnIndex={turnIndex}
        onRestart={restartGame}
      />

      <div className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 min-h-0">
        
        {/* 2. COMPONENT: STATUS & MESSAGE */}
        <GameStatusDisplay 
          gameStatus={gameStatus}
          message={message}
          hint={hint}
        />

        {/* 3. GRID (Bunu burada bırakabiliriz veya GameGrid diye ayırabiliriz ama burası okey) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full max-h-[60vh] md:max-h-[65vh]">
           {activeImages.map((img) => (
              <ImageCard 
                key={img.id} image={img} onClick={() => handleImageClick(img)}
                status={
                   eliminatedIds.includes(img.id) ? 'eliminated' :
                   (gameStatus === 'round_end' || gameStatus === 'game_over') && img.id === targetId ? 'correct' :
                   (gameStatus === 'round_end' || gameStatus === 'game_over') && img.id === selectedId && img.id !== targetId ? 'wrong' :
                   gameStatus !== 'playing' ? 'disabled' : 'default'
                }
              />
           ))}
        </div>
      </div>

      {/* FOOTER: Tek bir buton olduğu için component yapmaya gerek yok */}
      <div className="h-16 shrink-0 flex items-center justify-center mt-2 mb-4">
        {gameStatus === 'round_end' && (
            <button 
              onClick={handleNext}
              className="bg-game-card border border-brand-cyan text-brand-cyan font-bold py-2 px-8 rounded-full 
                         hover:bg-brand-cyan hover:text-game-bg hover:scale-105 transition-all animate-bounce"
            >
              SIRADAKİ SORU ➔
            </button>
        )}
      </div>

      {/* 4. COMPONENT: GAME OVER MODAL */}
      <GameOverModal 
        isVisible={gameStatus === 'game_over'}
        playerNames={playerNames}
        scores={scores}
        onRestart={restartGame}
      />
      
    </div>
  );
}

export default GamePage;