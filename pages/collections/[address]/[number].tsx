import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import itemStyle from "../../../styles/Item.module.css";
import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import { getAptosWallet } from "../../../utils/helper";
import { Nullable } from "../../../utils/types";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CollectionItem() {
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

  return (
    <>
      <Head>
        <title>24233</title>
        <meta name="description" content="Move NFT Create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setAddress={setAddress} address={address} />

      <main className={styles.main_profile}>
        <div className={itemStyle.item_holder}>
          <div className={itemStyle.left_holder}>
            <img
              className={itemStyle.collection_image}
              src={
                "https://i.seadn.io/gcs/files/b6dbca62f8d003b5aed6bab8c69e065e.jpg?auto=format&w=1000"
              }
            />
            <div className={itemStyle.desc_info}>
              Created by{" "}
              <span className={itemStyle.creator_link}>Deployer</span>
            </div>
            <Accordion className="mb-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>
                  <span className="attributes-title">Dummy name</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>Status</div>
              </AccordionDetails>
            </Accordion>
            <div>Attributes</div>
            <div>Desc</div>
            <div>Details</div>
          </div>
          <div className={itemStyle.right_holder}>
            <Link href={"/collections"} className="mr-20">
              <span className={itemStyle.owner_link}>Collection name </span>
            </Link>

            <h1 className={itemStyle.item_title}>#24233 </h1>
            <span>
              Owner &nbsp;
              <Link href={"/collections"} className="mr-20">
                <span className={itemStyle.owner_link}>{address}</span>
              </Link>
            </span>
          </div>
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
