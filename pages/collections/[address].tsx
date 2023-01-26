import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getAptosWallet } from "../../utils/helper";
import { Nullable } from "../../utils/types";
import NFTTab from "../../components/NFTTab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SideSearchBar from "../../components/SideSearchBar";
// import SearchBar from "../../components/SearchBar";

export default function Collection() {
  const [address, setAddress] = useState<Nullable<string>>(null);

  useEffect(() => {
    if ("aptos" in window) {
      (async () => {
        const wallet = getAptosWallet();
        if (await wallet.isConnected()) {
          const account = await wallet.account();
          setAddress(account.address);
        }
      })();
    }
  }, []);

  const collectionInfo = {
    coverImage: "",
    description: "",
    creationDate: "",
    fee: 5,
    numberOfItems: 100,
    items: [
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000",
        lastSale: 1,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/e83fd749ec1ac66e1eaf96d6a9ba61cf.gif?auto=format&w=1000",
        lastSale: 2.4,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000",
        lastSale: 1,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/e83fd749ec1ac66e1eaf96d6a9ba61cf.gif?auto=format&w=1000",
        lastSale: 2.4,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000",
        lastSale: 1,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/e83fd749ec1ac66e1eaf96d6a9ba61cf.gif?auto=format&w=1000",
        lastSale: 2.4,
        collectionAddress: "example",
      },

      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/8ae85eadd17db6bdae8168bb9a955d85.png?auto=format&w=1000",
        lastSale: 1,
        collectionAddress: "example",
      },
      {
        nftName: "Crypto Pank #100",
        imageUrl:
          "https://i.seadn.io/gcs/files/e83fd749ec1ac66e1eaf96d6a9ba61cf.gif?auto=format&w=1000",
        lastSale: 2.4,
        collectionAddress: "example",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Collection</title>
        <meta name="description" content="Move NFT Create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setAddress={setAddress} address={address} />

      <main className={styles.main_profile}>
        <div className="cover-img-holder">
          <img
            className="cover-img"
            src={
              "https://i.seadn.io/gae/1u5MfGdSC1g7KZyPoJsroj6M5J1afpe5sH1oUWY4McpHS_v0x_cVo-7_O5PstQjxeg6RHSTM5-5E6iLrSHPwPQQBRfkbZ-gXWGsc_Q?auto=format&w=1920"
            }
          />
          <div className="collection-metadata-holder">
            <div className="collection-title">Nyan Aoki</div>
            <div>
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership
              card, and grants access to members-only benefits.
            </div>
          </div>
        </div>
        <div className="collection-stat-holder">
          <div className="collection-stat-item">
            <span className="collection-stat-bold">100</span>
            <span>Items</span>
          </div>
          <div className="collection-stat-item">
            <span className="collection-stat-bold">5K</span>
            <span>Owners</span>
          </div>
          <div className="collection-stat-item">
            <span className="collection-stat-bold">10K</span>
            <span>Total Volume</span>
          </div>
          <div className="collection-stat-item">
            <span className="collection-stat-bold">60.2</span>
            <span>Floor</span>
          </div>
          <div className="collection-stat-item">
            <span className="collection-stat-bold">5%</span>
            <span>Creator earnings</span>
          </div>
        </div>
        <div className="nft-holder">
          <div className="collection-search-holder">
            <SideSearchBar />

            <div className="sidebar-title">Status</div>
            <div className="checkbox-inputs">
              <div className="checkbox-span">
                <span>Buy now</span>
                <FormControlLabel control={<Checkbox />} label="" />
              </div>
              <div className="checkbox-span">
                <span>On auction</span>
                <FormControlLabel control={<Checkbox />} label="" />
              </div>
            </div>

            <div className="sidebar-title">Price</div>
            <div className="control-holder">
              <div className="price-holder">
                <input placeholder="MIN" className="price-input" />
                <span className="controls-text">to</span>
                <input placeholder="MAX" className="price-input" />
              </div>
              <span className="button-span">Search</span>
            </div>
            <div className="sidebar-title">Attributes</div>
          </div>
          <NFTTab nfts={collectionInfo.items} />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://hypotenuse.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ NFTY
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="Hype Logo" width={19} height={19} />
          </span>
        </a>
      </footer>
    </>
  );
}
