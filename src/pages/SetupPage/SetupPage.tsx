import { Button, Container, Typography } from "@mui/material"; // Kullanılmayan Box ve Button kaldırıldı
import { Stack } from "@mui/material";
import { useState } from "react";
import RulesDisplay from "./RulesDisplay";
import PlayerNameInputs from "./PlayerNameInputs";
import GameModeButtons from "./GameModeButtons";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

// --- Bileşen Adı Güncellendi (App -> SetupPage) ---
function SetupPage() {

  // --- Tüm state ve handler mantığı buraya taşındı ---
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
    navigate('/game');
  };

  return (
    // --- JSX (render) kısmı aynen kopyalandı ---
    <Container sx={{ my: 4 }} maxWidth="sm">
      <Stack 
        spacing={4} 
        alignItems="center" 
      >
        <PageHeader title="Aİ FOTO BULMA OYUNU" />
      
        <Typography variant="body1">
          { currentNames[1]} PageHeader'ın altındaki diğer içerikler buraya gelecek.{ currentNames[0]}
        </Typography>
        
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

// --- Export Adı Güncellendi ---
export default SetupPage;