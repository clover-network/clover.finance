import React from 'react';
import cn from 'classnames';

import Arrow from '../../public/svg/arrow_fill.svg';
import styles from './Introduction.module.scss';
import Button from '../Button/Button';

const DESC_LIST = [
  {
    title: 'Multi-chain connected wallet',
    desc:
      ' With Clovers unique "always-on" multi-chain connected wallet, users are able to simultaneously connect with Web3js-based dapps and Polkadotjs-based dapps at the same time, and view their multi-chain assets. ',
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
];

export function Introduction() {
  return (
    <>
      <div className={styles.textOuter} style={{ maxWidth: 'none' }}>
        <p className={styles.textInner}>
          Simultaneously navigate and transact with
        </p>
        <p className={styles.textInner}>
          major networks.{' '}
          <span className={styles.green}>All in one overview!</span>
        </p>
      </div>
      <div className={styles.launch}>
        <img
          className={cn(styles.ball, styles.left)}
          src="/images/introduction.png"
          alt="Clover introduction"
        />
        <div className={styles.itemList}>
          {DESC_LIST.map((d, i) => {
            return (
              <div className={cn(styles.item)} key={i}>
                <div className={styles.descInner}>
                  <div className={styles.title}>
                    <span className={styles.index}>{`0${i + 1}.`}</span>
                    {d.title}
                  </div>
                  <p className={styles.desc}>{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Button className={styles.btn_secondary}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.9957 10.08L13.2957 14.78V5.5H10.7157V14.8L5.9957 10.08V13.5L11.9957 19.5L17.9957 13.5V10.08Z"
            fill="#42C37B"
          />
        </svg>
        <span>Download Now</span>
      </Button>
    </>
  );
}
