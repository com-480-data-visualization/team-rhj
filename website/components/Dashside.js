import React, { useState } from 'react';
import { Stack, Paper, Box, Typography, Slider, MenuItem, Select, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails, Switch } from '@mui/material';
import { useDash } from '../providers/DashProvider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Title } from './DashboardElem/shared';
import stateCodes from "../public/data/stateCodes.json";  // Assuming the JSON data is stored here


export default function Dashside() {
  const {
    selectedStateNames, setAgeRange,
    setCategories, setVisualisation,
    categories, gender,
    setGender, season,
    setSeasons, sizes, setSizes
  } = useDash();

  const [sliderValue, setSliderValue] = useState([20, 50]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setAgeRange(newValue);
  };

  // Formater les noms des États pour l'affichage
  function getStateFullName(acronym) {
    const state = stateCodes.find(state => state.id === acronym);
    return state ? state.name : null;
  }

  return (
    <Box padding={2} >
      <Stack direction="column" spacing={2} sx={{ width: '100%', marginTop: '5vh' }}>

        <Title >
          Filters
        </Title>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography>Selected states</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="column" spacing={.5}>
              <div style={{ borderBottom: '1px solid #ccc', width: '100%' }} />
              {selectedStateNames.map((state) => (
                <Typography key={state}>{getStateFullName(state)}</Typography>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Box>
          <Typography>Age Range:</Typography>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={18}
            max={70}
            valueLabelDisplay="auto"
            sx={{ margin: '20px 0' }}
          />
        </Box>

        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            value={gender}
            label="Option"
            onChange={(e) => setGender(e.target.value)}
            sx={{ marginBottom: '20px' }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Man</MenuItem>
            <MenuItem value="Female">Woman</MenuItem>
          </Select>
        </FormControl>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="column" spacing={.5}>
              <div style={{ borderBottom: '1px solid #ccc', width: '100%' }} />
              {['Clothing', 'Footwear', 'Accessories', 'Outerwear'].map((category) => (
                <div key={category} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ flexGrow: 1 }}>{category}</Typography>
                  <Switch defaultChecked onChange={(e) => setCategories(
                    prevCategories => ({
                      ...prevCategories,
                      [category]: e.target.checked,
                    }))} />
                </div>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography>Seasons</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="column" spacing={.5}>
              <div style={{ borderBottom: '1px solid #ccc', width: '100%' }} />
              {['Winter', 'Spring', 'Summer', 'Fall'].map((season) => (
                <div key={season} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ flexGrow: 1 }}>{season}</Typography>
                  <Switch defaultChecked onChange={(e) => setSeasons(
                    prevSeasons => ({
                      ...prevSeasons,
                      [season]: e.target.checked,
                    }))} />
                </div>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography>Sizes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="column" spacing={.5}>
              <div style={{ borderBottom: '1px solid #ccc', width: '100%' }} />
              {['S', 'M', 'L', 'XL'].map((size) => (
                <div key={size} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ flexGrow: 1 }}>{size}</Typography>
                  <Switch defaultChecked onChange={(e) => setSizes(
                    prevSizes => ({
                      ...prevSizes,
                      [size]: e.target.checked,
                    }))} />
                </div>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

      </Stack>
    </Box>
  );
}
