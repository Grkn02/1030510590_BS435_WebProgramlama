import { type SxProps, type Theme } from '@mui/material/styles';

// Dış sarmalayıcı - Artık 3D'ye gerek yok, basit bir konteyner
export const cardContainerStyles: SxProps<Theme> = {
  width: 220,
  height: 220,
};

// Kartın kendisi için stiller (Dinamik olduğu için fonksiyon)
export const getCardStyles = (
  theme: Theme,
  isSelected: boolean,
  cardStatus?: 'correct' | 'incorrect'
): SxProps<Theme> => {
  const getBorderColor = () => {
    if (cardStatus === 'correct') return theme.palette.success.main;
    if (cardStatus === 'incorrect') return theme.palette.error.main;
    return 'transparent';
  };

  return {
    width: '100%',
    height: '100%',
    // YENİ ANİMASYON MANTIĞI BURADA
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    transform: isSelected ? 'scale(1.05)' : 'scale(1)', // Seçiliyse %5 büyüt
    boxShadow: isSelected ? theme.shadows[12] : theme.shadows[4], // Seçiliyse gölgeyi artır
    
    border: `4px solid ${getBorderColor()}`,
    borderRadius: '16px',
    boxSizing: 'border-box',
    overflow: 'hidden', // Resmin çerçeveyi kaplamasını engeller
  };
};

// Resmin kendisi için stil
export const cardMediaStyles: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};