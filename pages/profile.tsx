import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { getAptosWallet } from "../utils/helper";
import { useEffect, useState } from "react";
import { Nullable } from "../utils/types";
import Avatar from "../components/Avatar";

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

  return (<>
  <Head>
        <title>Profile</title>
        <meta name="description" content="Move NFT Create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar
    setAddress={setAddress}
    address={address}
    />

    <main className={styles.main_profile}>
        <div className="profile-banner"></div>
        <Avatar imageUrl={'https://i.seadn.io/gcs/files/991ad1b50df621c412b570e9ee61ea27.png?auto=format&w=256'}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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

  </>);
}
