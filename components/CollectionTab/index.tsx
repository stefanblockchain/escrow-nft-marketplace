import React, { useRef, useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from '@mui/material';

const CollectionTab = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (_event: any, newTabIndex: any) => {
        setTabIndex(newTabIndex);
    };

    useEffect(() => { }, []);

    return (
        <Box>
            <Box>
                <Tabs value={tabIndex}
                    onChange={handleTabChange}
                    className="collection-tab"
                    sx={{
                        '& .MuiTabs-indicator': { "backgroundColor": "black" },
                        // '& .MuiTab-root': { "backgroundColor": "black" },
                        '& .Mui-selected': { "color": "black" },
                    }}
                >

                    <Tab label="Collected" />
                    <Tab label="Created" />
                </Tabs>
            </Box>

            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        <Typography>The first tab</Typography>
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <Typography>The second tab</Typography>
                    </Box>
                )}

            </Box>
        </Box>
    );
};

export default CollectionTab;
