import React, { useState, useContext, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Box } from '@mui/material';
import { useDash } from "../providers/DashProvider"; // Import your DashProvider context
import stateCodes from "../data/stateCodes.json";  // Assuming the JSON data is stored here

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const { setSelectedStateNames } = useDash(); // Utilisez le contexte ici

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
      return state ? state.id : '';
    });
    setSelectedStateNames(selectedStateNames); // Mettez à jour le contexte avec les noms des états sélectionnés
  }, [selectedStates, setSelectedStateNames]);

  // Gestion du clic en dehors pour désélectionner tous les États
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".rsm-geographies")) {
        setSelectedStates([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ComposableMap projection="geoAlbersUsa" 
        projectionConfig={{
            scale:1000}} 
        style={{ 
            width: '100%', height: 'auto' }}>

        <Geographies geography={geoUrl} className="rsm-geographies">
          {({ geographies }) => (
            geographies.map(geo => {
              const stateCode = stateCodes.find(s => s.val === geo.id)?.id;
              const isStateSelected = selectedStates.includes(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
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
    </Box>
  );
};

export default MapChart;
