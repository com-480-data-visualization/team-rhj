import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { PieChart, BarChart, LineChart, ScatterChart } from '@mui/x-charts';
import { useDash } from '../../providers/DashProvider';
import { Title, Legend, ColorCollection, colors, usd_formatter, sales_formatter } from './shared';


const ProductPreferenceAnalysis = () => {
  const { filteredData } = useDash();

  return (
    <Box sx={{ padding: '2vh' }}>
      <Grid container spacing={2}>
        {/* Category Spending Line Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Category Spending</Title>

            <BarChart
              height={300}
              dataset={ColorCollection(filteredData.dataCategorySpending || [])}
              sx={{
                '& .MuiAreaElement-root': {
                  fill: 'url(#gradient)',
                },
              }}
              series={[
                {
                  dataKey: 'value',
                  name: 'Subscription Status',
                  color: colors[2],
                  valueFormatter: usd_formatter,
                },
              ]}
              
              xAxis={[
                {
                  dataKey: 'label',
                  scaleType: 'band',                  
                },
              ]} />
            <Legend>This chart shows the spending of customers on different categories.</Legend>
          </Paper>
        </Grid>

        {/* Product Categories Purchased Bar Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Product Categories Purchased</Title>
            <BarChart
              height={300}
              dataset={ColorCollection(filteredData.dataProductCategoriesPurchased) || []}
              series={[
                {
                  dataKey: 'value',
                  name: 'Subscription Status',
                  color: colors[6],
                  valueFormatter: sales_formatter,
                },
              ]}
              xAxis={[
                {
                  dataKey: 'label',
                  scaleType: 'band',
                },
              ]}
            />

            <Legend>This chart shows the number of items sold in different product categories.</Legend>
          </Paper>
        </Grid>

        {/* Seasonal Trends Line Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Seasonal Trends</Title>

            <LineChart
              height={300}
              dataset={filteredData.dataSeasonalTrends || []}
              sx={{
                '& .MuiAreaElement-root': {
                  fill: 'url(#gradient)',
                },
              }}
              series={[
                {
                  dataKey: 'y',
                  color: 'red', // Set the line color to red
                  showMark: false,
                  curveType: 'natural', // Make the line curved
                  area: true,
                  valueFormatter: usd_formatter, // Format the value
                },
              ]}
              xAxis={[
                {
                  dataKey: 'x',
                  scaleType: 'band',
                },
              ]}
              defs={
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="red" stopOpacity={1} />
                    <stop offset="100%" stopColor="black" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
              } />
            <Legend>This chart shows the spending of customers in different seasons.</Legend>
          </Paper>
        </Grid>

        {/* Age Spending Scatter Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Age Spending</Title>
            <ScatterChart
              height={300}
              series={[
                {
                  data: ColorCollection(filteredData.dataAgeSpending || []),
                  labelField: "x",
                  valueField: "y",
                  name: "Age Spending",
                  color: colors[0],
                  valueFormatter: usd_formatter,
                },
              ]}
              options={{
                xAxis: {
                  title: 'Age',
                },
                yAxis: {
                  title: 'Spending (USD)',
                },
                title: {
                  text: 'Age Spending',
                },
              }}
            />
            <Legend>This chart shows the spending of customers based on their age.</Legend>
          </Paper>
        </Grid>

        {/* Item Category Distribution Pie Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Item Category Distribution</Title>
            <PieChart
              height={300}
              series={[
                {
                  data: ColorCollection(filteredData.dataItemCategoryDistribution) || [],
                  labelField: "label",
                  valueField: "value",
                  name: "Item Category Distribution",
                  valueFormatter: sales_formatter,
                },
              ]}         
            />
            <Legend>This chart shows the distribution of items in different categories.</Legend>
          </Paper>
        </Grid>

        {/* Item Size Distribution Pie Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Item Size Distribution</Title>
            <PieChart
              height={300}
              series={[
                {
                  data: ColorCollection(filteredData.dataItemSizeDistribution) || [],
                  labelField: "label",
                  valueField: "value",
                  name: "Item Size Distribution",
                  valueFormatter: sales_formatter,
                },
              ]}
              options={{
                labels: {
                  formatter: (value) => `${value}%`,
                },
                title: {
                  text: 'Item Size Distribution',
                },
              }}
            />
            <Legend>This chart shows the distribution of items based on their size.</Legend>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPreferenceAnalysis;
