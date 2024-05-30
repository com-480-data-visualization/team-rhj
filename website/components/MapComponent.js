import React, { useState, useContext, useEffect, useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Tooltip, Typography } from '@mui/material';
import { useDash } from "../providers/DashProvider"; // Import your DashProvider context
import stateCodes from "../public/data/stateCodes.json";  // Assuming the JSON data is stored here
import { scaleLinear } from 'd3-scale';
import { interpolateReds, interpolateBlues } from 'd3-scale-chromatic';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export { geoUrl };

const MapChart = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const { setSelectedStateNames } = useDash(); // Utilize the context here
  const { filteredData } = useDash();
  const { mapShownProperty, setMapShownProperty } = useDash();

  const handleStateClick = (stateId) => {
    setSelectedStates(prev => {
      const newStateSet = new Set(prev);
      if (newStateSet.has(stateId)) {
        newStateSet.delete(stateId);
      } else {
        newStateSet.add(stateId);
      }
      return Array.from(newStateSet);
    });
  };

  const handleDeselectAll = () => {
    setSelectedStates([]);
  };

  useEffect(() => {
    const selectedStateNames = selectedStates.map(stateId => {
      const state = stateCodes.find(s => s.val === stateId);
      return state ? state.id : '';
    });
    setSelectedStateNames(selectedStateNames); // Update context with selected state names
  }, [selectedStates, setSelectedStateNames]);


  const maxOrderValue = useMemo(() => {
    return Math.max(...Object.values(filteredData.dataMap || []), 0);
  }, [filteredData]);
  const minOrderValue = useMemo(() => {
    const dataMap = filteredData?.dataMap ?? [];
    let min = 999999999
    for (const key in dataMap) {
      if (dataMap[key] < min && dataMap[key] > 2) {
        min = dataMap[key]
      }
    }
    return min
    // Remove undefined values and calculate the minimum
    return Math.min(...Object.values(dataMap).filter(x => x !== undefined), 0);
  }, [filteredData]);
  const minOrderValueFormatted = useMemo(() => {
    return mapShownProperty === 'Number of Sales' ? `${minOrderValue} sales` : `$${minOrderValue.toFixed(2)}`;
  }, [minOrderValue, mapShownProperty]);
  const maxOrderValueFormatted = useMemo(() => {
    return mapShownProperty === 'Number of Sales' ? `${maxOrderValue} sales` : `$${maxOrderValue.toFixed(2)}`;
  }, [maxOrderValue, mapShownProperty]);

  const colorScale = useMemo(() => {
    return scaleLinear()
      .domain([minOrderValue, maxOrderValue])
      .range([0.2, 1]);
  }, [maxOrderValue, minOrderValue]);

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <h1 className="title-with-bars">Market Movements: A Geographic Guide to U.S. Consumer Behavior</h1>
      <p>
      Dive into the dynamic retail landscape of the United States with our interactive map, vividly displaying key metrics such 
      as the number of orders per state, total purchase amounts, or average spending. Customize your view by selecting the 
      specific metric you wish to explore. Simply click on any state to delve deeper, taking you to a dedicated page filled 
      with detailed graphs and in-depth analyses. On this page, you will gain a richer understanding of consumer behavior and 
      market trends specific to each state, providing a comprehensive look at regional nuances in shopping habits.
      </p>
      <Box fullWidth>
        <FormControl fullWidth>
          <InputLabel >Show</InputLabel>
          <Select
            value={mapShownProperty}
            label="What to show"
            onChange={(e) => setMapShownProperty(e.target.value)}
            sx={{ marginBottom: '20px' }}
          >
            <MenuItem value="Number of Sales">Number of Sales</MenuItem>
            <MenuItem value="Total Purchase Amount (USD)">Total Purchase Amount (USD)</MenuItem>
            <MenuItem value="Average Purchase Amount (USD)">Average Purchase Amount (USD)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            geographies.map(geo => {
              const stateCode = geo.id;
              const stateValue = filteredData.dataMap[stateCode] || 0;
              const stateValueFormatted = mapShownProperty === 'Number of Sales' ? `${stateValue} sales` : `${mapShownProperty} : \n$${stateValue.toFixed(2)}`;

              const isStateSelected = selectedStates.includes(stateCode);
              const stateName = stateCodes.find(s => s.val === geo.id)?.name;
              const redFillColor = interpolateReds(colorScale(stateValue));
              const blueFillColor = interpolateBlues(colorScale(stateValue));
              return (
                <Tooltip key={geo.rsmKey}
                  title={
                    <Stack>

                      <Typography color="inherit">{stateName || ''}</Typography>
                      <div style={{ borderBottom: '1px solid #ccc', width: '100%' }} />
                      <p style={{ whiteSpace: 'pre-wrap', width: '100%' }} >
                        {stateValueFormatted}
                      </p>
                    </Stack>
                  }
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'white', // Tooltip background
                        color: 'black', // Text color
                        fontSize: '0.875rem', // Text size
                        border: '1px solid #ccc', // Optional border
                      },
                    },
                  }}
                >

                  <Geography
                    geography={geo}
                    onClick={() => handleStateClick(geo.id)}
                    stroke="grey"
                    style={{
                      default: {
                        fill: isStateSelected ? blueFillColor : redFillColor,
                        outline: "black",
                        strokeWidth: 0.5,
                        strokeOpacity: 1,
                      },
                      hover: {
                        fill: isStateSelected ? blueFillColor : redFillColor,
                        outline: "black",
                        strokeWidth: .5,
                        strokeOpacity: 1,
                      },
                      pressed: {
                        fill: "gray",
                        outline: "black",
                        strokeWidth: 0.5,
                        strokeOpacity: 1,
                      }
                    }}
                  />
                </Tooltip>
              );
            })
          )}
        </Geographies>
      </ComposableMap>



      <Box sx={{ position: 'absolute', bottom: 16, left: 16, backgroundColor: 'white', padding: 2, borderRadius: 1, boxShadow: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Box sx={{ width: 24, height: 24, backgroundColor: interpolateBlues(0.7), marginRight: 1 }} />
          <span>Selected</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: 24, height: 24, backgroundColor: interpolateReds(0.7), marginRight: 1 }} />
          <span>Not Selected</span>
        </Box>
      </Box>
      <Box sx={{ width: '80%', maxWidth: '600px', marginTop: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
          <span>{minOrderValueFormatted}</span>
          <span>{maxOrderValueFormatted}</span>
        </Box>
        <Box sx={{ height: '24px', background: `linear-gradient(to right, ${interpolateReds(0.2)}, ${interpolateReds(1)})`, marginBottom: 1 }} />
        <Box sx={{ height: '24px', background: `linear-gradient(to right, ${interpolateBlues(0.2)}, ${interpolateBlues(1)})` }} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDeselectAll}
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
      >
        Deselect All
      </Button>


    </Stack >
  );
};

export default MapChart;
