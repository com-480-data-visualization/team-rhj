import { Stack, Paper, Box, Button } from '@mui/material';
import { useDash } from '../providers/DashProvider';
import React, { useState } from 'react';


export default function Tabs() {
    const tabs = ['Customer Type', 'Product Preference']
    const {
        selectedStateNames, setAgeRange,
        setSelectedCategory, setVisualisation,
        selectedCategory, gender,
        setGender, season,
        setSeason, size, setSize
    } = useDash();

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const handleTabClick = (vis) => {
        setActiveTab(vis);
        setVisualisation(vis);
    };

    return <Box sx={{
        borderTop: '2px solid #e0e0e0'
    }}>
        <Stack direction="row" >
            {tabs.map((vis) => (
                <Button
                    key={vis}
                    sx={{
                        flex: 1,
                        height: 'calc(100vh / 20)',
                        maxHeight: 'calc(100vh / 20)',
                        textAlign: 'center',
                        backgroundColor: activeTab === vis ? '#ffffff' : '#D0D0D0',
                        borderRadius: 0,
                        border: '0px solid #e0e0e0',
                        margin: '10dp',
                        color: '#000000',
                        '&:hover': {
                            backgroundColor: activeTab === vis ? '#ffffff' : '#D0D0D0', // Custom hover color
                        }
                    }}
                    onClick={() => handleTabClick(vis)}
                >
                    {vis}
                </Button>
            ))}
        </Stack>
    </Box>
}

