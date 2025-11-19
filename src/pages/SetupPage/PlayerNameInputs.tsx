import React, { useState, useEffect } from 'react';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'; // (X) ikonu için


interface PlayerNameInputsProps {
  // Dışarıdan kaç oyuncu girişi olacağını belirten prop
  playerCount: number ;
  
  // İsimler değiştiğinde ana sayfaya bilgi veren callback fonksiyonu
  onNamesChange: (names: string[]) => void;
}


const PlayerNameInputs: React.FC<PlayerNameInputsProps> = ({ playerCount, onNamesChange }) => {
 
  const [playerNames, setPlayerNames] = useState<string[]>(Array(playerCount).fill(''));

 
  // değiştirirse, bu component'in içindeki isim listesini sıfırlarız.
  useEffect(() => {
    setPlayerNames(Array(playerCount).fill(''));
  }, [playerCount]);

 
  // Component'in içindeki 'playerNames' state'i her değiştiğinde,
  // 'onNamesChange' prop'u aracılığıyla bu yeni bilgiyi
  // ana component'e "raporluyoruz".
  useEffect(() => {
    onNamesChange(playerNames);
  }, [playerNames, onNamesChange]);

  // Belirli bir index'teki oyuncunun adını güncelleyen fonksiyon
  // Bu fonksiyon component'in iç state'ini günceller.
  const handleNameChange = (index: number, newName: string) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = newName;
    setPlayerNames(updatedNames);
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="stretch" // Input'ların tam genişlikte olması için
      sx={{ width: '100%', maxWidth: '300px' }}
    >
      {Array.from({ length: playerCount }).map((_, index) => (
        <TextField
          size= 'small'
          key={index}
          label={`${index + 1}. Oyuncu Adını Giriniz`}
          variant="filled"
          value={playerNames[index]}
          onChange={(e) => handleNameChange(index, e.target.value)}
          InputProps={{ /// buraya dikkat et
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={() => handleNameChange(index, '')}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ))}
    </Stack>
  );
};

export default PlayerNameInputs;
