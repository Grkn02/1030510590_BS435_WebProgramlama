import React, { createContext, useState, useContext } from 'react';
import type { GameState, GameMode } from '../types/GameTypes';

const initialGameState: GameState = {
  playerCount: 1,
  playerNames: [],
  gameMode: 'standard', // Varsayılan mod
  setGameState: () => {},
};

export const GameContext = createContext<GameState>(initialGameState);

export const useGame = () => useContext(GameContext);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<Omit<GameState, 'setGameState'>>({
    playerCount: 1,
    playerNames: [],
    gameMode: 'standard', // Varsayılan
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