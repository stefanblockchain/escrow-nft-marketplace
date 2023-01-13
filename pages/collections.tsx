import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import CollectionTable from "../components/CollectionTable";
import CollectionDropDown from "../components/CollectionDropDown";

export default function Create() {

  return (<>
  <Head>
        <title>Collections</title>
        <meta name="description" content="Move NFT Create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>

    <main className={styles.main}>
        <h1 className={styles.title}>
        Collections
        </h1>
        <div className="grid place-items-center mt-10">Top collection ranked by floor price and and volume</div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <CollectionDropDown/>
        <CollectionTable/>
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
