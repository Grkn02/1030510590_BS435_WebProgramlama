// Oyun modlarını tanımlıyoruz
export type GameMode = 'standard' | 'reverse'; 
// standard: Yapay Zekayı Bul (2 Gerçek, 1 AI)
// reverse: Gerçek Olanı Bul (2 AI, 1 Gerçek) -> "Ters Köşe"

export interface GameState {
  playerCount: number;
  playerNames: string[];
  gameMode: GameMode; // Yeni eklenen alan
  setGameState: (state: Partial<Omit<GameState, 'setGameState'>>) => void;
}