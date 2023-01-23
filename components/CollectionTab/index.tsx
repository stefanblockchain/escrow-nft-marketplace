import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CollectionPreview from "../CollectionPreview";

const CollectionTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  let collected = [
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000",
      lastSale: 1,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/e83fd749ec1ac66e1eaf96d6a9ba61cf.gif?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/e9d27e84000056dfe818d5573703c33a.png?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gae/9mTf-CrvJigRteSlJjHMsQ4DAzEXN_d5CHW7xaszLW08HuT4C16S5b4u-q_kEV811Kp1RDh2oIUkZmOhu255YnfTMeL1-VAUHkdb2Uc?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/4c3351c425df8f1b921ecbc5bd643e19.jpg?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/1aa081d0a9319ebc40a9e4c5567a43b9.gif?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Crypto Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/337365c1952d32f3671f9dee503a6ded.gif?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
  ];

  let created = [
    {
      collectionName: "Created Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/4c3351c425df8f1b921ecbc5bd643e19.jpg?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Created Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/1aa081d0a9319ebc40a9e4c5567a43b9.gif?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
    {
      collectionName: "Created Pank",
      nftName: "Crypto Pank #100",
      imageUrl:
        "https://i.seadn.io/gcs/files/337365c1952d32f3671f9dee503a6ded.gif?auto=format&w=1000",
      lastSale: 2.4,
      collectionAddress: "example",
    },
  ];

  const handleTabChange = (_event: any, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  const renderItems = (collection: any) => {
    const items = collection.map((item: any) => (
      <Grid item md={2}>
        <div className="collection-item-holder">
          <div className="collection-item-img-holder">
            <img src={item.imageUrl} />
          </div>
          <div className="collection-item-info">
            <span>{item.nftName}</span>
            <span>{item.collectionName}</span>
          </div>
          <div className="collection-item-last-price">
            Last sale: {item.lastSale} APT
          </div>

          <div
            className="collection-item-buy-button"
            onClick={() => console.log(`Just bought`)}
          >
            Add to cart
          </div>
        </div>
      </Grid>
    ));
    return (
      <Grid container spacing={3}>
        {items}
      </Grid>
    );
  };

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
        {tabIndex === 0 && <Box>{renderItems(collected)}</Box>}
        {tabIndex === 1 && (
          <div>
            <Box>{renderItems(created)}</Box>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default CollectionTab;
