import React, { useEffect, useRef, useState } from 'react';
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
import { HEADER_MENU } from '../../constants';

const GetStarted = () => {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const { isMobile } = useMobileDetect();
  const [builder, setBuilder] = useState(false);
  const [resources, setResources] = useState(false);
  const [community, setCommunity] = useState(false);
  const [height, setHeight] = useState('auto');
  const [forImg, setForImg] = useState('forground.svg');

  const fetchForgroundImage = () => {
    if (themeRef.current === 'dark') {
      if (window.innerWidth >= 2400) return 'forground-sakura-xxl.svg';
      if (window.innerWidth <= 576) return 'forground-sakura-sm.svg';
      if (window.innerWidth <= 768) return 'forground-sakura-md.svg';
      return 'forground-sakura.svg';
    }

    if (window.innerWidth >= 2400) return 'forground-xxl.svg';
    if (window.innerWidth <= 576) return 'forground-sm.svg';
    if (window.innerWidth <= 768) return 'forground-md.svg';
    return 'forground.svg';
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

  useEffect(() => {
    themeRef.current = theme;
    setForImg(fetchForgroundImage());
  }, [theme]);

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
                  <h1>{HEADER_MENU[1].label}</h1>
                  <div className={styles.cardList}>
                    {HEADER_MENU[1].children.map(
                      (item: { link: string; label: string }) => {
                        return (
                          <p
                            onClick={() => window.open(item.link, '_blank')}
                          >{`${item.label} →`}</p>
                        );
                      },
                    )}
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
                  <h1>{HEADER_MENU[0].label}</h1>
                  <div className={styles.cardList}>
                    {HEADER_MENU[0].children.map(
                      (item: { link: string; label: string }) => {
                        return (
                          <p
                            onClick={() => window.open(item.link, '_blank')}
                          >{`${item.label} →`}</p>
                        );
                      },
                    )}
                  </div>
                  <BuilderSvg />
                </div>

                <div className={cn(styles.card, resources && styles.mini)}>
                  <ArrowDown
                    className={cn(styles.arrowDown, resources && styles.mini)}
                    onClick={() => setResources(!resources)}
                  />
                  <h1>{HEADER_MENU[2].label}</h1>
                  <div className={styles.cardList}>
                    {HEADER_MENU[2].children.map(
                      (item: { link: string; label: string }) => {
                        return (
                          <p
                            onClick={() => window.open(item.link, '_blank')}
                          >{`${item.label} →`}</p>
                        );
                      },
                    )}
                  </div>
                  <ResourcesSvg />
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.centerLogo,
                themeRef.current === 'dark' && styles.centerLogoSakura,
              )}
            >
              {themeRef && themeRef.current === 'dark' ? (
                <SakuraLogo style={{ width: 100, height: 100 }} />
              ) : (
                <Logo />
              )}
            </div>
            <div className={styles.textOuter}>
              {themeRef && themeRef.current === 'dark' ? (
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
