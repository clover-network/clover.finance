import React from 'react'
import Button from './Button'
import Arrow from '../public/svg/arrow_fill.svg'
import styles from '../styles/Introduction.module.scss'

const DESC_LIST = [
  {
    title: 'Multi-chain connected wallet',
    desc:
      'With Clovers unique "always-on" multi-chain connected wallet, users are able to simultaneously connect with Web3js-based dapps and Polkadotjs-based dapps at the same time, and view their multi-chain assets. ',
  },
  {
    title: 'All-in-one wallet extension',
    desc:
      'DeFi users can connect to Ethereum, Polkadot, Kusama, Binance Smart Chain, Avalanche, Fantom, and Edgeware blockchains and seamlessly transact with the Clover wallet extension interface.',
  },
  {
    title: 'Clover-native CLV token',
    desc:
      'The Clover CLV token is cross-chain compatible as our unique 2-way peg bridge technology allows the EVM based Clover address and Polkadot based Clover address to be bounded together, allowing the utilization of all both chains together.',
  },
]

export function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.launch}>
        <button className={styles.download}>
          <Arrow className={styles.iconArrow} />
          Download
        </button>
      </div>
      <div className={styles.itemList}>
        {DESC_LIST.map((d, i) => {
          return (
            <div className={styles.item} key={i}>
              <div className={styles.index}>{`0${i + 1}.`}</div>
              <div className={styles.descInner}>
                <div className={styles.title}>{d.title}</div>
                <p className={styles.desc}>{d.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
