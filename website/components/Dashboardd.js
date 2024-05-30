import React from 'react';
import { useDash } from '../providers/DashProvider';
import {Box } from '@mui/material';
import CustomerTypeAnalysis from './DashboardElem/CustomerTypeAnalysis';
import ProductPreferenceAnalysis from './DashboardElem/ProductPreferenceAnalysis';

const CategoryComponent = {
  "Customer Type": CustomerTypeAnalysis,
  "Product Preference": ProductPreferenceAnalysis,
};

export default function Dashboardd() {
  const { visualisation } = useDash();
  const ComponentToRender = CategoryComponent[visualisation] || CustomerTypeAnalysis;

  return (
    <Box sx={{  }}>
      <ComponentToRender />
    </Box>
  );
}
