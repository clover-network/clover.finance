import React from 'react';
import Button from './Button';
import styles from '../styles/GetStarted.module.scss';

const GetStarted = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>
      Cross-chain DeFi <span className={styles.accent}>Interoperability</span>
    </h1>
    <Button
      className={styles.btn}
      href="https://docs.clover.finance/quick-start/testnet/"
    >
      Start building
    </Button>
  </div>
);

export default GetStarted;
