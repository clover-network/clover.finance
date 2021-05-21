import React from 'react';
import { useTheme } from 'next-themes';

import styles from './StrategicPartners.module.scss';
import cn from 'classnames';
const LOGO_MAPS = [
  '/partner/graph.png',
  '/partner/chainlink.png',
  '/partner/prosper.png',
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
  '/partner/alice.png',
  '/partner/fantom.png',
  '/partner/darwinia.png',
  '/partner/mathwallet.png',
  '/partner/apron.png',
  '/partner/kiranetwork.png',
  '/partner/parsiq.png',
  '/partner/chainswap.png',
  '/partner/bounce.png',
  '/partner/automata.png',
];

export function StrategicPartners() {
  const { theme } = useTheme();

  const getDarkImageUrl = (image: string) => {
    const splits = image.split('.');
    return `${splits[0]}_dark.${splits[1]}`;
  };

  return (
    <div className={styles.root}>
      <header
        className={cn(styles.header, 'wow', 'bounceInUp')}
        data-wow-duration="2s"
        data-wow-delay="0s"
      >
        Strategic Partners
      </header>
      <div className={styles.logos}>
        <div className={styles.logosContent}>
          {LOGO_MAPS.map(url => {
            return (
              <div
                key={url}
                className={cn(styles.logo, 'wow', 'bounceInUp')}
                data-wow-duration="2s"
                data-wow-delay="0s"
              >
                <img
                  src={theme && theme === 'dark' ? getDarkImageUrl(url) : url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
