import React from 'react';
import Arrow from '../../public/svg/arrow_fill.svg';
import styles from './Introduction.module.scss';
import cn from 'classnames';

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
      'The Clover CLV token is cross-chain compatible as our unique 2-way peg bridge technology allows the EVM based Clover address and Polkadot based Clover address to be bounded together, allowing the utilization of all chains together.',
  },
];

export function Introduction() {
  return (
    <>
      <div className={styles.textOuter} style={{ maxWidth: 'none' }}>
        <p className={styles.textInner}>
          Navigate and transact with major networks
        </p>
        <p className={cn(styles.textInner, styles.green)}>
          in just one overview!
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.launch}>
          <img
            className={cn(styles.ball, styles.left)}
            src="/images/ball.jpg"
            alt="Clover browser extension"
          />
          <img
            className={cn(styles.ball, styles.right)}
            src="/images/ball.jpg"
            alt="Clover browser extension"
          />
          <img
            className={styles.launchPic}
            src="/images/launch.jpg"
            alt="Clover browser extension"
          />
          <a
            className={styles.download}
            href="https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Arrow className={styles.iconArrow} />
            Download
          </a>
        </div>
        <div className={styles.itemList}>
          {DESC_LIST.map((d, i) => {
            return (
              <div className={cn(styles.item)} key={i}>
                <div className={styles.index}>{`0${i + 1}.`}</div>
                <div className={styles.descInner}>
                  <div className={styles.title}>{d.title}</div>
                  <p className={styles.desc}>{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
