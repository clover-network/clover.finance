import React, {useEffect} from 'react'
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
// declare var $
// declare var AOS
// declare var hljs
declare var WOW
const Home = () => {
    useEffect(() => {
        setTimeout(_ => {
            new WOW({ animateClass: 'animated' }).init();
        },2000)
    },[])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" type='text/css' href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css" />
                <script src="https://cdn.bootcss.com/wow/1.1.2/wow.min.js"></script>

                {/*<link rel='stylesheet' type='text/css' href='/aoc/aos.css'/>*/}
                {/*<script src="http://www.jq22.com/jquery/2.1.1/jquery.min.js"></script>*/}
                {/*<script src="/aoc/highlight.min.js"></script>*/}
                {/*<script src="/aoc/aos.js"></script>*/}
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
