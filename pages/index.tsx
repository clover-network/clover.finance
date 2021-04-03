import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import GetStarted from '../components/GetStarted/GetStarted'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'
import DnaAndFeatures from '../components/CloverDnaAndFeature/CloverDnaAndFeature'
import ClvToken from '../components/ClvToken'
import {Team} from '../components/Team/Team'
import EarlyBackers from '../components/EarlyBackers/EarlyBackers'
import styles from './Home.module.scss'
import {ARTICLES, CLVTOKENS, DNAS, FEATURES,} from '../constants'
import {StrategicPartners} from '../components/StrategicPartners/StrategicPartners'
import {Introduction} from '../components/Introduction/Introduction'
import Features from '../components/ClvFeatures/CloverFeature';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className={styles.main}>
                <GetStarted/>
                <Introduction/>

                <DnaAndFeatures dnas={DNAS}/>
                <Features features={FEATURES}/>
                <ClvToken clvTokens={CLVTOKENS}/>

            </main>
            <div className={styles.bottom}>
                <EarlyBackers/>
                <Blog items={ARTICLES}/>
                <StrategicPartners/>
                <Team/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
