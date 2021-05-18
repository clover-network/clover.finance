import React from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './CloverDNA.module.scss';
import Button from '../Button/Button';

const DnaAndFeatures = ({
  dnas = [],
  features = [],
  clvTokens = [],
}: {
  dnas?: {
    title: string;
    content: string;
    btnText: string;
    link: string;
  }[];
  features?: {
    title: string;
    content: string;
    btnText: string;
    link: string;
  }[];
  clvTokens?: {
    title: string;
    content: string;
  }[];
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.topWrapper}>
        <div
          className={cn(styles.topContent, 'wow', 'bounceInUp')}
          data-wow-duration="2s"
          data-wow-delay="0s"
        >
          <span className={styles.title}>
            {theme === 'dark' ? "Sakura's DNA" : `Clover's DNA`}
          </span>
          <img
            className={styles.backImage}
            src={
              theme && theme === 'dark'
                ? '/images/clover-dna-sakura.svg'
                : '/images/clover-dna.svg'
            }
            alt=""
          />
          {!!inView && (
            <div className={styles.contentBox}>
              {dnas.map(dna => (
                <div className={styles.topContentItem} key={dna.title}>
                  <div>
                    <h3>{dna.title}</h3>
                    <p>{dna.content}</p>
                  </div>
                  {dna.btnText && (
                    <Button
                      className={styles.btn}
                      onClick={() => window.open(dna.link)}
                    >
                      {dna.btnText}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DnaAndFeatures;
