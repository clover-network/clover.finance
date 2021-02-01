import React from 'react';
import Blocks from './Blocks';
import styles from '../styles/WhatIf.module.scss';
import { BLOCKS } from '../constants';

const WhatIf = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.accent}>What if...?</span> you could easily build cross-chain swaps, vaults and yield earning strategies?
      </div>
    </div>
    <Blocks items={BLOCKS} />
  </div>
);

export default WhatIf;
