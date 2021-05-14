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
import useMobileDetect from '../../utils/hooks/useMobileDetect';

const GetStarted = () => {
  const { theme } = useTheme();
  const { isMobile } = useMobileDetect();
  const [builder, setBuilder] = useState(false);
  const [resources, setResources] = useState(false);
  const [community, setCommunity] = useState(false);
  const [height, setHeight] = useState('auto');
  const [forImg, setForImg] = useState('forground.svg');

  const fetchForgroundImage = () => {
    if (window.innerWidth <= 576) return 'forground-sm.svg';
    if (window.innerWidth <= 768) return 'forground-md.svg';
    return 'forground.svg';
  };

  const getBackgroundUrl = () => {
    return theme && theme === 'dark'
      ? isMobile()
        ? '/forground-sakura.svg'
        : '/forground-sakura.svg'
      : isMobile()
      ? '/forground-sm.svg'
      : '/forground.svg';
  };

  const handleResize = () => {
    setForImg(fetchForgroundImage());
  };

  useEffect(() => {
    let event = null;
    if (window) {
      setForImg(fetchForgroundImage());
      event = window.addEventListener('resize', handleResize);
    }

    return () => {
      if (event) window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(Number(builder) + Number(community) + Number(resources));

  return (
    <>
      <InView threshold={0} triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={cn(
              styles.wrapper,
              styles.hidden,
              Number(builder) + Number(community) + Number(resources) === 0 &&
                styles.height0,
              Number(builder) + Number(community) + Number(resources) === 1 &&
                styles.height1,
              Number(builder) + Number(community) + Number(resources) === 2 &&
                styles.height2,
              Number(builder) + Number(community) + Number(resources) === 3 &&
                styles.height3,
              {
                [`${styles.visible}`]: inView,
              },
            )}
          >
            {isMobile()
              ? `${
                  621 +
                  (builder ? 270 : 90) +
                  (community ? 270 : 90) +
                  (resources ? 270 : 90)
                }px !important`
              : 'auto !important'}
            <div className={styles.forground}>
              <img src={forImg} alt="back" />

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
