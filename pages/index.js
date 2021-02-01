import Head from 'next/head'
import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import WhatIf from '../components/WhatIf';
import Projects from '../components/Projects';
import Press from '../components/Press';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss'
import { PROJECTS, ARTICLES } from '../constants';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <GetStarted />
        <WhatIf />
        <Projects items={PROJECTS} />
        <Press items={ARTICLES} />
      </main>
      <Footer />
    </div>
  )
};

export default Home;
