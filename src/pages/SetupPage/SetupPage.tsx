import { Button, Container, Typography } from "@mui/material"; // Kullanılmayan Box ve Button kaldırıldı
import { Stack } from "@mui/material";
import { useState } from "react";
import RulesDisplay from "./RulesDisplay";
import PlayerNameInputs from "./PlayerNameInputs";
import GameModeButtons from "./GameModeButtons";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { useGame } from '../../contexts/GameContext';
import { type GameState } from '../../types/GameTypes';

function SetupPage() {

  const { setGameState } = useGame();
  const [playerCount, setPlayerCount] = useState<number>(1);
  const [currentNames, setCurrentNames] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNamesChange = (names: string[]) => {
    setCurrentNames(names);
  };

  const handlePlayerChange = (player: number) => {
    setPlayerCount(player);
  };

  const handleStartGame = () => {
    // 1. Kontrol: Girilen isim sayısı, seçilen oyuncu sayısına eşit mi?
    if (currentNames.length !== playerCount) {
      alert(`Lütfen ${playerCount} oyuncu için tam olarak ${playerCount} adet isim giriniz.`);
      return; // Koşul sağlanmazsa fonksiyonu burada sonlandır.
    }
    
    // 2. Kontrol (Ek Olarak): Girilen isimler boş değer içeriyor mu?
    // Eğer tüm oyuncular için isim girilmiş, ancak bazıları boş string ise (örn: ['Ali', '']),
    // bu kontrolü de eklemek faydalı olur.
    const hasEmptyName = currentNames.some(name => name.trim() === '');
    if (hasEmptyName) {
        alert("Lütfen tüm oyuncu adlarını doldurunuz.");
        return;
    }

   
      setGameState({ 
      playerCount: playerCount,
      playerNames: currentNames
    });

    navigate('/game');
    
    
  };

  return (
   
    <Container sx={{ my: 4 }} maxWidth="sm">
      <Stack 
        spacing={4} 
        alignItems="center" 
      >
        <PageHeader title="Aİ FOTO BULMA OYUNU" />
        
        <RulesDisplay rulesText="karşına çıkacak üç fotoğraftan hangisinin yapay zeka tarafından üretildiğini bulabilir misin? Gözlem yeteneğini test et, doğru fotoğrafı seç ve puanları topla!"/>
        
        <GameModeButtons onPlayerChange={handlePlayerChange} />
        
        <PlayerNameInputs playerCount={playerCount} onNamesChange={handleNamesChange}/>

        <Button 
          onClick={handleStartGame}
          variant="contained" 
          color="primary" 
          sx={{ py: 1.5, px: 5, fontSize: '1rem' }} 
        >
         Oyunu Başlat
        </Button>

      </Stack>
    </Container>
  );
}


export default SetupPage;