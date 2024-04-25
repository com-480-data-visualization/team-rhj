import React from 'react';
import DashboardInfo from '../components/DashboardInfo';
import MapComponent from "../components/MapComponent";
import { DashProvider } from "../providers/DashProvider";
import { Box } from '@mui/material';

export default function Index() {
  return (
    <DashProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Use flexBasis to split the height and add margin between components */}
        <Box sx={{ flex: 1, width: '100%', marginTop: '10vh'}}>  {/* Adjust marginBottom as needed */}
          <MapComponent />
        </Box>
        <Box sx={{ flex: 1, width: '100%', marginTop: '10vh' }}>   {/* Adjust marginTop as needed */}
          <DashboardInfo />
        </Box>
      </Box>
    </DashProvider>
  );
}
