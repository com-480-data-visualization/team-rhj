import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Box } from '@mui/material';
import { useDash } from "../providers/DashProvider"; // Assuming you are using some context
import stateCodes from "../data/stateCodes.json"; // Ensure this is correctly linked

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const { setSelectedStateNames } = useDash();
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const selectedStateNames = selectedStates.map(stateId => {
      const state = stateCodes.find(s => s.val === stateId);
      return state ? state.name : '';
    });
    setSelectedStateNames(selectedStateNames);
  }, [selectedStates, setSelectedStateNames]);

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <ComposableMap projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }} 
        style={{ width: '100%', height: 'auto' }}>

        <Geographies geography={geoUrl} className="rsm-geographies">
          {({ geographies }) => (
            geographies.map(geo => {
              const stateDetail = stateCodes.find(s => s.val === geo.id);
              const isStateSelected = selectedStates.includes(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={evt => {
                    const { x, y } = evt.currentTarget.getBoundingClientRect();
                    setTooltipContent(stateDetail ? stateDetail.name : "Unknown State"); // Display the full state name
                    setTooltipPosition({ x, y });
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => handleStateClick(geo.id)}
                  stroke="grey"
                  style={{
                    default: {
                      fill: isStateSelected ? "red" : "#D6D6DA",
                      outline: "black",
                      strokeWidth: 0.5,
                      strokeOpacity: 1,
                    },
                    hover: {
                      fill: "#F53",
                      outline: "black",
                      strokeWidth: 0.5,
                      strokeOpacity: 1,
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "black",
                      strokeWidth: 0.5,
                      strokeOpacity: 1,
                    }
                  }}
                />
              );
            })
          )}
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <Box sx={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          background: "white",
          border: "1px solid black",
          padding: "10px",
          pointerEvents: "none",
          zIndex: 1000
        }}>
          {tooltipContent}
        </Box>
      )}
    </Box>
  );
};

export default MapChart;
