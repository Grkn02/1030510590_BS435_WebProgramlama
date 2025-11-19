import React, { createContext, useState, useContext } from 'react';
import type { GameState } from '../types/GameTypes'; // Yeni tipleri import edin
 // Yeni tipleri import edin


const initialGameState: GameState = {
  playerCount: 1, // Başlangıçta oyuncu sayısı tek oyunculu
  playerNames: [],
  setGameState: () => {},
};

export const GameContext = createContext<GameState>(initialGameState);

export const useGame = () => useContext(GameContext);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Omit<GameState, 'setGameState'>, state içinde setGameState tutmamak için kullanılır.
  const [state, setState] = useState<Omit<GameState, 'setGameState'>>({
    playerCount: 1,
    playerNames: [],
  });

  const setGameState = (newState: Partial<Omit<GameState, 'setGameState'>>) => {
    setState(prevState => ({ ...prevState, ...newState }));
  };

  const contextValue: GameState = {
    ...state,
    setGameState,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};