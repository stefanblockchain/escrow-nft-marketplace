import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CollectionTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: any, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  const renderItem = (item: any) => {};

  return (
    <Box>
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          className="collection-tab"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "black" },
            // '& .MuiTab-root': { "color": "black" },
            "& .Mui-selected": { color: "black", "font-weight": "bold" },
          }}
        >
          <Tab label="Collected" />
          <Tab label="Created" />
        </Tabs>
      </Box>

      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <img
                  src={
                    "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000"
                  }
                />
              </Grid>
              
            </Grid>
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
