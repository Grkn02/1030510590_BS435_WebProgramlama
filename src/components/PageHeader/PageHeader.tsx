import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PageHeaderProps {
  title: string;
}

/**
 * Uygulamanın genel sayfa başlığını gösteren, yeniden kullanılabilir component.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;              