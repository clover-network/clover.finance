import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';

import styles from './GetStarted.module.scss';
import Button from '../Button/Button';
import Logo from '../../public/svg/logo.svg';
import SakuraLogo from '../../public/svg/sakura_logo.svg';

import BuilderSvg from '../../public/svg/builder.svg';
import CommunitySvg from '../../public/svg/community.svg';
import ResourcesSvg from '../../public/svg/resources.svg';
import ArrowDown from '../../public/svg/arrow_down.svg';

const GetStarted = () => {
  const { theme, setTheme } = useTheme();
  const [builder, setBuilder] = useState(false);
  const [resources, setResources] = useState(false);
  const [community, setCommunity] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const fetchIsMobile = () => {
    return window.innerWidth <= 600 && window.innerHeight <= 800;
  };

  const getBackgroundUrl = () => {
    return theme && theme === 'dark'
      ? isMobile
        ? '/forground-sakura.svg'
        : '/forground-sakura.svg'
      : isMobile
      ? '/forground-sm.svg'
      : '/forground.svg';
  };

  const handleResize = () => {
    setIsMobile(fetchIsMobile());
  };

  useEffect(() => {
    let event = null;
    if (window) {
      setIsMobile(fetchIsMobile());
      event = window.addEventListener('resize', handleResize);
    }

    return () => {
      if (event) window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <InView threshold={0} triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={cn(styles.wrapper, styles.hidden, {
              [`${styles.visible}`]: inView,
            })}
          >
            <div className={styles.forground}>
              <span>{getBackgroundUrl()}</span>
              <img src={getBackgroundUrl()} alt="back" />

              <div className={styles.resources}>
                <div className={cn(styles.card, community && styles.mini)}>
                  <ArrowDown
                    className={cn(styles.arrowDown, community && styles.mini)}
                    onClick={() => setCommunity(!community)}
                  />
                  <h1>Community</h1>
                  <div className={styles.cardList}>
                    <p>Telegram →</p>
                    <p>Discord →</p>
                    <p>Twitter →</p>
                    <p>Medium →</p>
                  </div>
                  <CommunitySvg />
                </div>

                <div
                  className={cn(styles.card, builder && styles.mini)}
                  style={{ minWidth: 292 }}
                >
                  <ArrowDown
                    className={cn(styles.arrowDown, builder && styles.mini)}
                    onClick={() => setBuilder(!builder)}
                  />
                  <h1>Builders</h1>
                  <div className={styles.cardList}>
                    <p>Developer Incentive Program →</p>
                    <p>Testnet →</p>
                    <p>Developer Discord →</p>
                    <p>Github →</p>
                  </div>
                  <BuilderSvg />
                </div>

                <div className={cn(styles.card, resources && styles.mini)}>
                  <ArrowDown
                    className={cn(styles.arrowDown, resources && styles.mini)}
                    onClick={() => setResources(!resources)}
                  />
                  <h1>Resources</h1>
                  <div className={styles.cardList}>
                    <p>Documentation →</p>
                    <p>Lightpaper →</p>
                    <p>FAQ →</p>
                  </div>
                  <ResourcesSvg />
                </div>
              </div>
            </div>
            <div
              className={styles.centerLogo}
              style={{ padding: theme && theme === 'dark' ? 16 : 30 }}
            >
              {theme && theme === 'dark' ? (
                <SakuraLogo style={{ width: 100, height: 100 }} />
              ) : (
                <Logo />
              )}
            </div>
            <div className={styles.textOuter}>
              {theme && theme === 'dark' ? (
                <p className={styles.textInner}>
                  Platform built for
                  <br />
                  cross-chain DeFi on
                  <br /> Kusama.
                </p>
              ) : (
                <p className={styles.textInner}>
                  A foundational
                  <br />
                  layer for cross-chain
                  <br /> compatibility.
                </p>
              )}
            </div>
            <Button
              className={styles.btn}
              href="https://docs.clover.finance/quick-start/testnet/"
            >
              Start Building
            </Button>
          </div>
        )}
      </InView>
    </>
  );
};

export default GetStarted;
