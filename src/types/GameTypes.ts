export interface GameState {
  playerCount: number;
  playerNames: string[]; 
  
  setGameState: (state: Partial<GameState>) => void; 
} 