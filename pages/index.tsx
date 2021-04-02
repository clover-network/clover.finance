import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import GetStarted from '../components/GetStarted'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import DnaAndFeatures from '../components/CloverDnaAndFeature'
import {Team} from '../components/Team'
import EarlyBackers from '../components/EarlyBackers'
import styles from '../styles/Home.module.scss'
import {ARTICLES, CLVTOKENS, DNAS, FEATURES,} from '../constants'
import {StrategicPartners} from '../components/StrategicPartners'

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
        <DnaAndFeatures dnas={DNAS} features={FEATURES} clvTokens={CLVTOKENS} />
      </main>
      <div className={styles.bottom}>
        <EarlyBackers />
        <Blog items={ARTICLES} />
        <StrategicPartners />
        <Team />
        <Footer />
      </div>
    </div>
  )
}

export default Home
