import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import {
  cardContainerStyles,
  getCardStyles, // İsmi değişti
  cardMediaStyles
} from './ImageCard.styles';

// Prop'lar sadeleşti
interface ImageCardProps {
  id: number | string;
  imageUrl: string;
  onCardSelect: (id: number | string) => void;
  isSelected: boolean; // Yeni prop
  disabled?: boolean;
  cardStatus?: 'correct' | 'incorrect';
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  imageUrl,
  onCardSelect,
  isSelected,
  disabled = false,
  cardStatus,
}) => {
  const theme = useTheme();

  const handleClick = () => {
    if (disabled) return;
    onCardSelect(id);
  };

  const containerSxWithCursor = {
    ...cardContainerStyles,
    cursor: disabled ? 'default' : 'pointer',
  };
  
  return (
    
    <Box onClick={handleClick} sx={containerSxWithCursor}>
      <Card sx={getCardStyles(theme, isSelected, cardStatus)}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Seçenek"
          sx={cardMediaStyles}
        />
      </Card>
    </Box>
  );
};

export default ImageCard;