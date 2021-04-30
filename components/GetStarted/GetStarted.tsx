import React from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';

import styles from './GetStarted.module.scss';
import Button from '../Button/Button';
import Logo from '../../public/svg/logo.svg';
import BuilderSvg from '../../public/svg/builder.svg';
import CommunitySvg from '../../public/svg/community.svg';
import ResourcesSvg from '../../public/svg/resources.svg';

const GetStarted = () => {
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
            <img className={styles.forground} src="/forground.svg" alt="back" />
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

            <div className={styles.resources}>
              <div className={styles.card}>
                <h1>Community</h1>
                <div className={styles.cardList}>
                  <p>Telegram →</p>
                  <p>Discord →</p>
                  <p>Twitter →</p>
                  <p>Medium →</p>
                </div>
                <CommunitySvg />
              </div>

              <div className={styles.card} style={{ minWidth: 292 }}>
                <h1>Builders</h1>
                <div className={styles.cardList}>
                  <p>Developer Incentive Program →</p>
                  <p>Testnet →</p>
                  <p>Developer Discord →</p>
                  <p>Github →</p>
                </div>
                <BuilderSvg />
              </div>

              <div className={styles.card}>
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
        )}
      </InView>
    </>
  );
};

export default GetStarted;
