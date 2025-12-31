import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './contexts/GameContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
       <GameProvider>
        <App />
       </GameProvider>
      </BrowserRouter>
  </StrictMode>,
)
