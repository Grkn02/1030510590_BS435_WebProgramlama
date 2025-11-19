import React from 'react';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


interface RulesDisplayProps {
  rulesText: string;
}

const RulesDisplay: React.FC<RulesDisplayProps> = ({ rulesText }) => {
  return (
  
    <Box sx={{ textAlign: 'center', maxWidth: '500px' }}> {/* max-width ekleyerek metnin çok yayılmasını önleriz */}
      
    
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