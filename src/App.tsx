import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import PageHeader from "./components/PageHeader/PageHeader";
import RulesDisplay from "./pages/SetupPage/RulesDisplay";
import PlayerNameInputs from "./pages/SetupPage/PlayerNameInputs";
import { useState } from "react";
import GameModeButtons from "./pages/SetupPage/GameModeButtons";

function App() {

  
  const [playerCount, setPlayerCount] = useState<number>(1);
  

  const [currentNames, setCurrentNames] = useState<string[]>([]);
  
 
  const handleNamesChange = (names: string[]) => {
   
    setCurrentNames(names);
  };

  const handlePlayerChange = (player: number) =>{
    setPlayerCount(player);

  }

  
  

  return (

    <Container sx={{ my: 4 }}  maxWidth="sm">
      
    
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

        



      </Stack>
    </Container>
  );
    
    
}

export default App;