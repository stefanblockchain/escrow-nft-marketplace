import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { getAptosWallet } from "../utils/helper";
import { Fragment, useEffect, useState } from "react";
import { Nullable } from "../utils/types";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import Avatar from "../components/Avatar";
import { IconButton } from "@mui/material";
import CollectionTab from "../components/CollectionTab";

export default function Create() {
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

  const trimAddress = (address: any) => {
    if (!address) return;
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
  };

  const copyAction = (address: any) => {
    navigator.clipboard.writeText(address || "");
  };

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Move NFT Create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setAddress={setAddress} address={address} />

      <main className={styles.main_profile}>
        <div className="profile-banner"></div>
        <Avatar
          imageUrl={
            "https://i.seadn.io/gcs/files/991ad1b50df621c412b570e9ee61ea27.png?auto=format&w=256"
          }
        />
        <Tooltip title="Copy" placement="top" arrow>
          <div
            className="font-bold text-3xl address-holder cursor-pointer"
            onClick={() => {
              copyAction(address);
            }}
          >
            {trimAddress(address)}
          </div>
        </Tooltip>
        <CollectionTab />
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
