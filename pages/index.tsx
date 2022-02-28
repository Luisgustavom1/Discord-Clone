import type { NextPage } from "next";
import Head from "next/head";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Home</title>
      <meta name="description" content="Gen rated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>Home</div>
  </div>
);

export default Home;
