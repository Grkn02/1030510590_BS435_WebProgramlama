import React, { useState, useEffect } from 'react';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'; // (X) ikonu için

// Component'in dış dünyadan alacağı "talimatları" (props) tanımlıyoruz
interface PlayerNameInputsProps {
  // Dışarıdan kaç oyuncu girişi olacağını belirten prop
  playerCount: number ;
  
  // İsimler değiştiğinde ana sayfaya bilgi veren callback fonksiyonu
  onNamesChange: (names: string[]) => void;
}

/**
 * Oyuncu adlarını almak için dinamik sayıda TextField gösteren "aptal" component.
 * Gerekli tüm bilgileri ve fonksiyonları props olarak alır.
 */
const PlayerNameInputs: React.FC<PlayerNameInputsProps> = ({ playerCount, onNamesChange }) => {
  // 1. Component'in KENDİ İÇ STATE'i:
  // Kullanıcının yazdığı isimleri anlık olarak tutmak için.
  const [playerNames, setPlayerNames] = useState<string[]>(Array(playerCount).fill(''));

  // 2. DIŞARIDAN GELEN 'playerCount' PROP'UNU İZLEYEN EFFECT:
  // Eğer üst component (App.tsx) oyuncu sayısını 1'den 2'ye (veya 2'den 1'e)
  // değiştirirse, bu component'in içindeki isim listesini sıfırlarız.
  useEffect(() => {
    setPlayerNames(Array(playerCount).fill(''));
  }, [playerCount]);

  // 3. İÇ STATE'İ İZLEYEN EFFECT:
  // Component'in içindeki 'playerNames' state'i her değiştiğinde,
  // 'onNamesChange' prop'u aracılığıyla bu yeni bilgiyi
  // ana component'e (App.tsx) "raporluyoruz".
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
