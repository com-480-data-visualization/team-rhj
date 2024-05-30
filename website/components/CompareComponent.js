import { Box, Grid, Paper, Stack, Tooltip } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoUrl } from "./MapComponent";
import stateCodes from "../public/data/stateCodes.json";  // Assuming the JSON data is stored here
import { ColorCollection, Legend, Title, colors, usd_formatter, users_formatter } from './DashboardElem/shared';
import { BarChart, LineChart } from "@mui/x-charts";
import { useDash } from "@/providers/DashProvider";
import { useEffect, useState } from "react";
export default function CompareComponent() {
    const MyMap = (color, setSelectedStatesNames) => {
        const [selectedStates, setSelectedStates] = useState([]);
        const {validStateNames} = useDash();
        // select one random state to show the map
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
            setSelectedStatesNames(selectedStateNames); // Update context with selected state names
        }, [selectedStates, setSelectedStatesNames]);

        

        return (
            <ComposableMap
                projection="geoAlbersUsa"
                projectionConfig={{ scale: 1000 }}
                style={{ width: '100%', height: 'auto' }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                        geographies.map(geo => {
                            const stateCode = geo.id;
                            const stateName = stateCodes.find(s => s.val === geo.id)?.name;
                            const isStateSelected = selectedStates.includes(stateCode);
                            return (
                                <Tooltip key={geo.rsmKey} title={stateName || ''} sx={{
                                    tooltip: {
                                        backgroundColor: 'white', // Tooltip background
                                        color: 'black', // Text color
                                        fontSize: '0.875rem', // Text size
                                        border: '1px solid #ccc' // Optional border
                                    }
                                }}>
                                    <Geography
                                        geography={geo}
                                        stroke="grey"
                                        onClick={() => handleStateClick(geo.id)}
                                        style={{
                                            default: {
                                                fill: isStateSelected ? color : "lightgray",
                                                outline: "black",
                                                strokeWidth: 1,
                                                strokeOpacity: 1,
                                            },
                                            hover: {
                                                fill: color,
                                                outline: "black",
                                                strokeWidth: 1,
                                                strokeOpacity: 1,
                                            },
                                            pressed: {
                                                fill: "gray",
                                                outline: "black",
                                                strokeWidth: 1,
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
        )
    }
    let color1 = colors[2]
    let color2 = colors[6]


    const { dataRegion1, dataRegion2, setSelectedStateNamesRegion1, setSelectedStateNamesRegion2, selectedStateNamesRegion1, selectedStateNamesRegion2 } = useDash();
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }} spacing={2}>
            <h1 className="title-with-bars">Compare Regional Shopping Trends</h1>
            <p>
                Our side-by-side comparison tool allows you to analyze and contrast shopping behaviors between two selected regions.
                Each region on the maps can consist of one or several states, providing flexibility in defining the scope of your
                comparison. Select areas on the maps to view key metrics such as gender distribution, age distribution or category spending in parallel.
                This feature is designed to give you a clearer understanding of how shopping trends vary between different parts of the
                country, enabling you to draw meaningful insights from regional differences. Dive into the data to discover how consumer
                habits compare across the U.S. with just a few clicks!
            </p>
            {/* two columns for comparison */}
            <Stack direction="row" spacing='10%' sx={{ width: '80%' }}>
                <Box flexGrow={1} sx={{ textAlign: 'center' }} >
                    <h2>Region 1</h2>
                    {/* Add your comparison component here */}
                    {MyMap(color1, setSelectedStateNamesRegion1)}
                    <Paper elevation={3} >
                        <Title>Gender Distribution</Title>

                        <BarChart
                            height={300}

                            sx={{
                                '& .MuiAreaElement-root': {
                                    fill: 'url(#gradient)',
                                },
                            }}
                            series={[
                                {
                                    data: (dataRegion1.dataGender || []).map((item, index) => item.value),
                                    name: 'Subscription Status',
                                    color: color1,
                                    valueFormatter: users_formatter,
                                }, {
                                    data: (dataRegion2.dataGender || []).map((item, index) => item.value),
                                    name: 'Subscription Status',
                                    color: color2,
                                    valueFormatter: users_formatter,
                                },
                            ]}

                            xAxis={[
                                {
                                    data: (dataRegion1.dataGender || []).map((item, index) => item.label),
                                    scaleType: 'band',
                                },
                            ]} />
                        <Legend>This chart shows the gender distribution of customers.</Legend>
                    </Paper>
                </Box>
                <Box flexGrow={1} sx={{ textAlign: 'center' }} >
                    <h2>Region 2</h2>
                    {/* Add your comparison component here */}
                    {MyMap(color2, setSelectedStateNamesRegion2)}
                    <Paper elevation={3} >
                        <Title>Age Distribution</Title>

                        <LineChart
                            height={300}

                            sx={{
                                '& .MuiAreaElement-root': {
                                    fill: 'url(#gradient)',
                                },
                            }}
                            series={[
                                {
                                    data: (dataRegion1.dataAge || []).map((item, index) => item.value),
                                    name: 'Subscription Status',
                                    color: color1,
                                    valueFormatter: users_formatter,
                                    showMark: false,
                                    curveType: 'natural',
                                }, {
                                    data: (dataRegion2.dataAge || []).map((item, index) => item.value),
                                    name: 'Subscription Status',
                                    color: color2,
                                    valueFormatter: users_formatter,
                                    showMark: false,
                                    curveType: 'natural',
                                },
                            ]}

                            xAxis={[
                                {
                                    data: (dataRegion1.dataAge || []).map((item, index) => item.label),
                                    scaleType: 'band',
                                },
                            ]} />
                        <Legend>This chart shows the age distribution of customers.</Legend>
                    </Paper>
                </Box>
            </Stack>

            <Paper elevation={3} sx={{ width: '80%' }}>
                <Title>Category Spending</Title>

                <BarChart
                    height={300}

                    sx={{
                        '& .MuiAreaElement-root': {
                            fill: 'url(#gradient)',
                        },
                    }}
                    series={[
                        {
                            data: (dataRegion1.dataCategorySpending || []).map((item, index) => item.value),
                            name: 'Subscription Status',
                            color: color1,
                            valueFormatter: usd_formatter,
                        }, {
                            data: (dataRegion2.dataCategorySpending || []).map((item, index) => item.value),
                            name: 'Subscription Status',
                            color: color2,
                            valueFormatter: usd_formatter,
                        },
                    ]}

                    xAxis={[
                        {
                            data: (dataRegion1.dataCategorySpending || []).map((item, index) => item.label),
                            scaleType: 'band',
                        },
                    ]} />
                <Legend>This chart shows the spending of customers on different categories.</Legend>
            </Paper>

        </Stack>

    );
}