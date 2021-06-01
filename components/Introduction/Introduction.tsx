import React from 'react';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

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

const DESC_LIST_SAKURA = [
  {
    title: 'Performance and Innovation',
    desc:
      'Sakura network will serve as a innovative sibling cross-chain network to Clover with looser restrictions, allowing creators and users on the network with a high performance network powered by the security of Kusama. ',
  },
  {
    title: 'On-Chain Governance',
    desc:
      'Kusama will enable a more community driven and faster on-chain governance methodology, allowing Sakura builders to immediately start developing ground breaking DeFi Dapps without the constraints of stricter governance guidelines. ',
  },
  {
    title: 'Development Tools',
    desc:
      'Sakura developers will be able to use both substrate based and Ethereum compatible development environments. Developers familiar with EVM based development tools like Solidity, Web3, Truffle, etc, will easily be able to deploy their applications on top of the Sakura network, and secured by Kusama.',
  },
];

export function Introduction() {
  const { theme } = useTheme();
  const router = useRouter();

  const handleDownload = () => {
    if (theme !== 'dark') {
      window.open(
        'https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk',
        '_blank',
      );
    }
  };

  return (
    <>
      <div className={styles.textOuter}>
        <p className={styles.textInner}>
          {router.pathname === '/sakura'
            ? 'Build powerful DeFi applications on '
            : 'Simultaneously navigate and transact with major networks. '}
          <span className={styles.green}>
            {router.pathname === '/sakura' ? 'Sakura' : 'All in one overview!'}
          </span>
        </p>
      </div>
      <div
        className={cn(styles.launch, router.pathname === '/sakura' && styles.launchSakura)}
      >
        <img
          className={cn(styles.ball, styles.left)}
          src={
            theme && router.pathname === '/sakura'
              ? '/images/introduction-sakura.png'
              : '/images/introduction.png'
          }
          alt="Clover introduction"
        />
        <div className={styles.itemList}>
          {(router.pathname === '/sakura' ? DESC_LIST_SAKURA : DESC_LIST).map((d, i) => {
            return (
              <div className={cn(styles.item)} key={i}>
                <div className={styles.descInner}>
                  <div className={styles.title}>
                    <span className={styles.index}>{`0${i + 1}.`}</span>
                    {d.title}
                  </div>
                  <p className={styles.desc}>{d.desc}</p>
                  {i === 1 && theme !== 'dark' && (
                    <Button
                      className={styles.btn_secondary}
                      onClick={handleDownload}
                    >
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
                          fill={
                            theme && theme == 'dark' ? '#ff5995' : '#42C37B'
                          }
                        />
                      </svg>
                      <span>Download Now</span>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
