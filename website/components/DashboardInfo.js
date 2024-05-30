import React from 'react';
import { Box } from '@mui/material';
import Dashboardd from './Dashboardd';
import Dashside from './Dashside';
import Tab from './Tabs'

export default function DashboardInfo() {
  return (
    <Box >
      <Box sx={{ p: 3, width: '100%', textAlign: 'center' }}>
        <h1 className="title-with-bars">In-Depth Insights: Analyzing State-Specific Consumer Trends</h1>
      </Box>
      <Box sx={{ p: 3, width: '100%', textAlign: 'left' }}>
        <p>Welcome to our Detailed Analysis Dashboard!
          <br />
          This section offers a deeper dive into the data, allowing you to explore more nuanced aspects of consumer behavior
          and product preferences across different states. You can choose to analyze either "Consumer Habits" or "Product Preferences,"
          each featuring tailored visualizations to better understand specific aspects of the market.
          <br />
          Utilize our robust filtering options to refine your analysis. Adjust filters based on age, gender, product categories, seasons and item sizes
          to focus your investigation on particular demographic groups or areas of interest. These filters enable you to dissect the
          data, providing a detailed look at how different consumer segments engage with products and make purchasing decisions.
          <br />
        </p>
        <p style={{ fontStyle: 'italic' }}>Note: You see on the left the states you selected before on the map. If you did not select any states on the map, the charts show the blended values of all US states.</p>
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Dashside width="150px" />
        <Box sx={{ flex: 4 }}>
          <Tab />
          <Dashboardd />
        </Box>
      </Box>
    </Box>
  );
}
