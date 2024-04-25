import React from 'react';
import { Box } from '@mui/material';
import Dashboardd from './Dashboardd';
import Dashside from './Dashside';

export default function DashboardInfo() {
  return (
    <Box sx={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      borderTop: '5px solid black',  // Ajout d'une bordure en haut de 5px noire
      boxSizing: 'border-box'        // Garantit que la hauteur totale inclut la bordure
    }}>
      <Dashside />
      <Dashboardd />
    </Box>
  );
}
