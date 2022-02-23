import type { NextPage } from "next";
import Head from "next/head";
import Teste from "src/layouts/teste";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Gen rated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Teste />
  </div>
);

export default Home;
