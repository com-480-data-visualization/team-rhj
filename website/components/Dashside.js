import React from 'react';
import { Stack, Paper, Box, Typography } from '@mui/material';
import { useDash } from '../providers/DashProvider';

export default function Dashside() {
  const { selectCategory } = useDash();

  return (
    <Box sx={{ 
        width: '20%', 
        height: '100vh', 
        backgroundColor: '#ffffff', // Fond blanc
        display: 'flex', 
        justifyContent: 'center', 
        borderRight: '2px solid #e0e0e0'  // Bordure droite pour séparation
    }}>
      <Stack direction="column" spacing={2} sx={{ width: '80%', marginTop: '5vh' }}>
        <Typography variant="h6" component="h2" sx={{ 
            width: '100%', 
            textAlign: 'center', 
            marginBottom: '20px', // Espacement avant les Paper
            fontWeight: 'bold', // Gras pour le titre
            color: '#333' // Couleur du texte
          }}>
          Types de visualisations
        </Typography>
        {['Vizualisation_1', 'Vizualisation_2', 'Vizualisation_3', 'Vizualisation_4', 'Vizualisation_5'].map((category) => (
          <Paper
            key={category}
            sx={{
              height: 'calc(100vh / 20)',
              maxHeight: 'calc(100vh / 20)',
              fontFamily: 'Roboto',
              cursor: 'pointer',
              textAlign: 'center',
              lineHeight: 'calc(100vh / 20)', // Alignement vertical du texte
              backgroundColor: '#f4f4f4', // Fond des Paper
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Ombre légère
              borderRadius: '4px', // Coins arrondis
              margin: '2px 0', // Marge entre chaque Paper
            }}
            onClick={() => selectCategory(category)}
          >
            {category}
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
