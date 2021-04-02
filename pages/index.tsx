import Head from 'next/head'
import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import WhatIf from '../components/WhatIf';
import Partners from '../components/Partners';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import DnaAndFeatures from '../components/CloverDnaAndFeature';
import styles from '../styles/Home.module.scss'
import { MAIN_PARTNERS, PARTNERS, ARTICLES, DNAS, FEATURES, CLVTOKENS } from '../constants';

export async function getStaticProps() {
  return {
    props: {},
  }
}

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
        {/* <WhatIf /> */}
        {/* <Partners items={PARTNERS} topItems={MAIN_PARTNERS} /> */}
        {/* <Blog items={ARTICLES} /> */}
      </main>
      <DnaAndFeatures dnas={DNAS} features={FEATURES} clvTokens={CLVTOKENS} />
      <div className={styles.bottom}>

      </div>
      <Footer />
    </div>
  )
}

export default Home
