import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { PieChart, BarChart, LineChart } from '@mui/x-charts';
import { useDash } from '../../providers/DashProvider';
import {Title, Legend, ColorCollection, colors, users_formatter, sales_formatter} from './shared';


const CustomerTypeAnalysis = () => {
  const { filteredData } = useDash();



  return (
    <Box sx={{
      padding: '2vh'
    }}>
      <Grid container spacing={2}>
        {/* Gender Distribution Pie Chart */}
        <Grid item xs={6}>
          <Paper elevation={3} >
            <Title>Gender Distribution</Title>
            <PieChart
              height={300}
              series={[
                {
                  data: ColorCollection(filteredData.dataGender || []),
                  labelField: 'label',
                  valueField: 'value',
                  name: 'Gender Distribution',
                  valueFormatter: users_formatter,
                },
              ]}
              options={{
                labels: {
                  formatter: (value) => `${value}%`,
                },
                title: {
                  text: 'Gender Distribution',
                },
              }}
            />
            <Legend>This chart shows the distribution of gender of customers.</Legend>
          </Paper>
        </Grid>

        {/* Payment Methods Pie Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Payment Methods</Title>
            <PieChart
              height={300}
              series={[
                {
                  data: ColorCollection(filteredData.dataPaymentMethods || []),
                  labelField: 'label',
                  valueField: 'value',
                  name: 'Payment Methods',
                  valueFormatter: sales_formatter,
                },
              ]}
              options={{
                labels: {
                  formatter: (value) => `${value}%`,
                },
                title: {
                  text: 'Payment Methods',
                },
              }}
            />
            <Legend>This chart shows the distribution of payment methods used.</Legend>
          </Paper>
        </Grid>

        {/* Age Distribution Line Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Age distribution</Title>

            <LineChart
              height={300}
              dataset={filteredData.dataAge || []}
              sx={{
                '& .MuiAreaElement-root': {
                  fill: 'url(#gradient)',
                },
              }}              
              series={[
                {
                  dataKey: 'value',
                  color: 'red', // Set the line color to red
                  showMark: false,
                  curveType: 'natural', // Make the line curved
                  area: true,
                  valueFormatter: users_formatter,
                },
              ]}
              xAxis={[
                {
                  dataKey: 'label',
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
              }/>
            <Legend>This chart shows the distribution of age of customers.</Legend>
          </Paper>
        </Grid>

        {/* Subscription Status Bar Chart */}
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Title>Subscription Status</Title>
            <BarChart
              height={300}
              dataset={filteredData.dataSubscription || []}
              series={[
                {
                  dataKey: 'value',
                  name: 'Subscription Status',
                  color: colors[2],
                  valueFormatter: users_formatter,
                },
              ]}
              xAxis={[
                {
                  dataKey: 'label',
                  scaleType: 'band',
                },
              ]}
            />
            <Legend>This chart shows the distribution of subscription status of customers.</Legend>
          </Paper>
        </Grid>

        {/* Shipping Type Bar Chart */}
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Title>Shipping Type</Title>
            <BarChart
              color="red"
              height={300}
              dataset={filteredData.dataShippingType || []}
              series={[
                {
                  dataKey: 'value',
                  name: 'Shipping Type',
                  type:'bar',
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
            <Legend>This chart shows the distribution of shipping types used.</Legend>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerTypeAnalysis;

