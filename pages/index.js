import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Sidebar from "../comps/sidebar/Sidebar";
import MainFeed from "../comps/main-feed/MainFeed";
import SearchAndWidgets from "../comps/s&w/SearchAndWidgets";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.mainfeed}>
          <MainFeed />
        </div>
        <div className={styles.searchandwidgets}>
          <SearchAndWidgets />
        </div>
      </div>
    </>
  );
}
