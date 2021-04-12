import React from 'react'
import styles from './StrategicPartners.module.scss'
import cn from 'classnames'
const LOGO_MAPS = [
  '/partner/graph.png',
  '/partner/chainlink.png',
  '/partner/prosper.png',
  '/partner/ankr.svg',
  '/partner/dodo.png',
  '/partner/polygon.png',
  '/partner/litentry.png',
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
  '/partner/parsiq.png',
]

export function StrategicPartners() {
  return (
    <div className={styles.root}>
      <header className={cn(styles.header,'wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s">Strategic Partners</header>
      <div className={styles.logos}>
        {LOGO_MAPS.map((url) => {
          return (
            <div
              key={url}
              className={cn(styles.logo,'wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s"
              style={{
                background: 'url(' + url + ')no-repeat center',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
