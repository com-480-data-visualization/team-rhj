import React from 'react';
import MainPage from '../components/MainPage';
import DashboardInfo from '../components/DashboardInfo';
import MapComponent from "../components/MapComponent";
import Introduction from "../components/Introduction";
import { DashProvider } from "../providers/DashProvider";
import { Box } from '@mui/material';
import CompareComponent from '@/components/CompareComponent';

export default function Index() {
  return (
    <DashProvider>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ flex: 1}}>  
          <MainPage />
        </Box>
        <Box sx={{ flex: 1, marginTop: '10vh' }}> 
          <Introduction />
        </Box>
        <Box sx={{ flex: 1, marginTop: '10vh' }}>
          <MapComponent />
        </Box>
        <Box sx={{ flex: 1, marginTop: '10vh' }}>  
          <DashboardInfo />
        </Box>
        <Box sx={{ flex: 1, marginTop: '10vh' }}>  
          <CompareComponent />
        </Box>
      </Box>
    </DashProvider>
  );
}
