import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './contexts/GameContext';

const theme = createTheme({
  palette: {
    mode: 'light',
    
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Bütün uygulamayı (App) MUI'nin tema sağlayıcısı ile sarmalıyoruz */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
     
      <CssBaseline />

       <GameProvider>

        <App />

       </GameProvider>
       
      </BrowserRouter>
  
    </ThemeProvider>
    
  </StrictMode>,
)
