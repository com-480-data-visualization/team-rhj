import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{
          color: 'black',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'  // Ajoute un effet d'ombre pour un look "3D"
        }}>
          RHJ-Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
