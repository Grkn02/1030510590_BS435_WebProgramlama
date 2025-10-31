import React from 'react';

// Gerekli Material-UI component'lerini import ediyoruz
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * RulesDisplay component'inin alacağı props'ları tanımlayan arayüz.
 * Bu, component'i farklı kural metinleriyle yeniden kullanmamızı sağlar.
 */
interface RulesDisplayProps {
  rulesText: string;
}

/**
 * Oyunun kurallarını gösteren, yeniden kullanılabilir component.
 */
const RulesDisplay: React.FC<RulesDisplayProps> = ({ rulesText }) => {
  return (
    // Box, kurallar bölümü için bir konteyner görevi görür.
    // textAlign: 'center' -> İçindeki başlığı ve metni yatayda ortalar.
    <Box sx={{ textAlign: 'center', maxWidth: '500px' }}> {/* max-width ekleyerek metnin çok yayılmasını önleriz */}
      
      {/* Kuralların başlığı */}
      <Typography 
        variant="button" // Buton metni gibi hafifçe vurgulu bir stil
        color="primary"  // Temadan gelen ana rengi kullanır
        fontWeight="bold"
      >
        Oyun Kuralları
      </Typography>
      
      {/* Asıl kural metni */}
      <Typography 
        variant="body2"       // Standart metinden biraz daha küçük bir stil
        color="text.secondary" // Ana metinden daha az vurgulu, hafif gri bir renk
        sx={{ mt: 1 }}        // Üstündeki başlıkla arasına 8px boşluk bırakır (margin-top)
      >
        {rulesText}
      </Typography>
    </Box>
  );
};

export default RulesDisplay;