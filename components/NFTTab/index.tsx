import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const NFTTab = (collection: any) => {
  const renderItems = () => {
    const items = collection.nfts.map((item: any) => (
      <Grid item md={2}>
        <Link href={`/collections/gfgdgf/${item.itemId}`}>
          <div className="collection-item-holder">
            <div className="collection-item-img-holder">
              <img src={item.imageUrl} />
            </div>
            <div className="collection-item-info">
              <span>{item.nftName}</span>
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
        </Link>
      </Grid>
    ));
    return (
      <Grid container spacing={3}>
        {items}
      </Grid>
    );
  };

  return <div className="nft-items-holder">{renderItems()}</div>;
};

export default NFTTab;
