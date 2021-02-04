import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Typist from 'react-typist';
import { useInView } from 'react-intersection-observer';
import Blocks from './Blocks';
import debounce from '../utils/debounce';
import styles from '../styles/WhatIf.module.scss';
import { BLOCKS } from '../constants';

const WhatIf = () => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };
  const [current, setCurrent] = useState(null);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  useEffect(() => {
    setCurrent(1);
  }, [inView]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div ref={ref} className={styles.title}>
          <span
            className={cn(styles.accent, styles.hidden, {
              [`${styles.visible}`]: inView,
            })}
          >
            What if...?
          </span>
          {!!inView && (
            <div className={styles.subtitle}>
              {current === 1 && (
                <Typist
                  avgTypingDelay={80}
                  cursor={cursor}
                  onTypingDone={debounce(() => setCurrent(2), 1000)}
                >
                  You could easily build cross&#8209;chain swaps, vaults and yield earning strategies?
                </Typist>
              )}
              {current === 2 && (
                <Typist
                  avgTypingDelay={80}
                  cursor={cursor}
                  onTypingDone={debounce(() => setCurrent(3), 1000)}
                >
                  You would earn passive income by&nbsp;deploying smart contracts on&nbsp;Polkadot?
                </Typist>
              )}
              {current === 3 && (
                <Typist
                  avgTypingDelay={80}
                  cursor={cursor}
                  onTypingDone={debounce(() => setCurrent(1), 1000)}
                >
                  You would pay lower gas fees if&nbsp;you are a&nbsp;frequent user of&nbsp;a&nbsp;DeFi protocol?
                </Typist>
              )}
            </div>
          )}
        </div>
      </div>
      <Blocks items={BLOCKS} />
    </div>
  );
};

export default WhatIf;
