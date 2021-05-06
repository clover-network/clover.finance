import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';

import styles from './GetStarted.module.scss';
import Button from '../Button/Button';
import Logo from '../../public/svg/logo.svg';
import BuilderSvg from '../../public/svg/builder.svg';
import CommunitySvg from '../../public/svg/community.svg';
import ResourcesSvg from '../../public/svg/resources.svg';
import ArrowDown from '../../public/svg/arrow_down.svg';

const GetStarted = () => {
  const [builder, setBuilder] = useState(false);
  const [resources, setResources] = useState(false);
  const [community, setCommunity] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const fetchIsMobile = () => {
    if (
      typeof window !== 'undefined' &&
      /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (window) {
      setIsMobile(fetchIsMobile());
    }
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
              <img
                src={isMobile ? '/forground-sm.svg' : '/forground.svg'}
                alt="back"
              />
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

            <div className={styles.centerLogo}>
              <Logo />
            </div>

            <div className={styles.textOuter}>
              <p className={styles.textInner}>
                A foundational
                <br />
                layer for cross-chain
                <br /> compatibility.
              </p>
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
