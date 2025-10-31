import { Button, Stack } from "@mui/material";
import { useState } from "react";

interface GameModeButtonsProps { 
onPlayerChange: (playerCount: number) => void;
}

const GameModeButtons: React.FC<GameModeButtonsProps> = ({onPlayerChange}) => {

    const [playerCount,setPlayerCount] = useState<number>(1)
    const handlePlayerChange = (player: number) => {
        setPlayerCount(player);
        onPlayerChange(player);

    }


    return(
    <Stack direction="row" spacing={2}>
          <Button 
            variant={playerCount === 1 ? "contained" : "outlined"} 
            onClick={() => handlePlayerChange(1)}
          >
            1 Oyuncu
          </Button>
          <Button 
            variant={playerCount === 2 ? "contained" : "outlined"} 
            onClick={() => handlePlayerChange(2)}
          >
            2 Oyuncu
          </Button>
    </Stack>


)


}
export default GameModeButtons












