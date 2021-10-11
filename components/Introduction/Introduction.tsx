import React from 'react';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import QRCode from 'qrcode-react';
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

export function Introduction({scrollDownloadRef}) {
  const { theme } = useTheme();
  const router = useRouter();

  const handleDownloadIOS = () => {
    if (theme !== 'dark') {
      window.open(
        'https://apps.apple.com/app/clover-wallet/id1570072858',
        '_blank',
      );
    }
  };

  const handleDownloadAndroid = () => {
    if (theme !== 'dark') {
      window.open(
        'https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk',
        '_blank',
      );
    }
  };

  const handleDownloadChrome = () => {
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
        {theme !== 'dark' && (
          <div
            ref={scrollDownloadRef}
            className={cn(styles.btnGroup)}
          >
            <Button
              className={styles.btn_item}
              onClick={handleDownloadIOS}
            >
              <img width={24} height={24} src='/images/ios_icon.svg' alt='' />
              <span>Download for iOS</span>
            </Button>
            <Button
              className={styles.btn_item}
              onClick={handleDownloadAndroid}
            >
              <img width={24} height={24} src='/images/android_icon.svg' alt='' />
              <span>Download for Android</span>
            </Button>
            <Button
              className={styles.btn_item}
              onClick={handleDownloadChrome}
            >
              <img width={24} height={24} src='/images/chrome_icon.svg' alt='' />
              <span>Add to Chrome</span>
            </Button>
            <Button className={cn(styles.btn_item, styles.btn_code)}>
              <img width={24} height={24} src='/images/code_icon.svg' alt='' />
              <div>
                <div>
                  <QRCode size={180} value='https://clover.finance/' />
                  <span>Scan QR code to download</span>
                </div>
              </div>
            </Button>
          </div>
        )}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
