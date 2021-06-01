import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Header from '../components/Header/Header';
import GetStarted from '../components/GetStarted/GetStarted';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import DnaAndFeatures from '../components/CloverDnaAndFeature/CloverDnaAndFeature';
import ClvToken from '../components/ClvToken';
import { Team } from '../components/Team/Team';
import EarlyBackers from '../components/EarlyBackers/EarlyBackers';
import styles from './Home.module.scss';
import { ARTICLES, CLVTOKENS, DNAS, FEATURES, SKUTOKENS } from '../constants';
import { StrategicPartners } from '../components/StrategicPartners/StrategicPartners';
import { Introduction } from '../components/Introduction/Introduction';
import Features from '../components/ClvFeatures/CloverFeature';

declare var WOW;
const Home = () => {
  const { theme, setTheme } = useTheme();
  const scrollRef = useRef(null);
  const router = useRouter();

  const handleClickScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    if (router.pathname !== '/') {
      router.push(router.pathname)
    }
  }, []);

  useEffect(() => {
    setTheme('light');
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css"
        />
        <script src="https://cdn.bootcss.com/wow/1.1.2/wow.min.js"></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <GetStarted />
        <Introduction />
        <DnaAndFeatures dnas={DNAS.light} />
        <Features features={FEATURES} handleScroll={handleClickScroll} />
        <div ref={scrollRef}>
          <ClvToken clvTokens={CLVTOKENS} />
        </div>
      </main>
      <div className={styles.bottom}>
        <EarlyBackers />
        <Blog items={ARTICLES} />
        <StrategicPartners />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
