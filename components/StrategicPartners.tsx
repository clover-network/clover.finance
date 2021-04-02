import React from 'react'
import styles from '../styles/StrategicPartners.module.scss'
const LOGO_MAPS = [
  '/partner/polkadot.png',
  '/partner/graph.png',
  '/partner/chainlink.png',
  '/partner/prosper.png',
  '/partner/dodo.png',
  '/partner/polygon.png',
  '/partner/litentry.png',
  '/partner/advanca.png',
  '/partner/boringdao.png',
  '/partner/injective.png',
  '/partner/crust.png',
  '/partner/showcase.png',
  '/partner/hedget.png',
  '/partner/snowswap.png',
  '/partner/etha_lend.png',
  '/partner/bella.png',
  '/partner/dego.png',
  '/partner/manta.png',
  '/partner/easyfi.png',
  '/partner/unilend.png',
]

export function StrategicPartners() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>Strategic Partners</header>
      <div style={{ maxWidth: 1100, overflow: 'hidden' }}>
        {LOGO_MAPS.map((url) => {
          return (
            <div
              className={styles.logo}
              style={{
                background: 'url(' + url + ')no-repeat center',
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
