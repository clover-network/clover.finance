import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import cn from 'classnames';
import styles from './Navigation.module.scss';
import Logo from '../../public/svg/logo.svg';
import SakuraLogo from '../../public/svg/sakura_logo.svg';
import useMobileDetect from '../../utils/hooks/useMobileDetect';

const Navigation = ({
  className,
  items = [],
  active = false,
  handleScroll
}: {
  className?: string;
  items?: {
    label: string;
    children: { label: string; link: string }[];
  }[];
  handleScroll?: () => void;
  active?: boolean;
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [currentMenu, setCurrentMenu] = useState('');
  const [innerWidth, setInnerWidth] = useState(1024);
  const { isMobile } = useMobileDetect();

  useEffect(() => {
    const onresize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', onresize);
  }, [innerWidth]);

  return (
    <nav
      className={cn(styles.nav, className, {
        [`${styles.navActive}`]: active,
      })}
    >
      <div className={styles.container}>
        {/* <div className={styles.logo}>
          <i className={styles.logoImage}>
            {theme && theme === 'dark' ? <SakuraLogo /> : <Logo />}
          </i>
          <div className={styles.logoText}>
            {theme && theme === 'dark' ? 'sakura' : 'clover'}
          </div>
        </div>

        <h1>Menu</h1> */}
        {!!items.length && (
          <ul className={styles.list}>
            {items?.map(({ children, label }) => (
              <div
                className={styles.item}
                key={label}
                onClick={
                  innerWidth < 576 || innerWidth === 576
                    ? e => {
                        setCurrentMenu(label);
                      }
                    : () => {}
                }
                onMouseEnter={
                  innerWidth > 576
                    ? e => {
                        setCurrentMenu(label);
                      }
                    : () => {}
                }
                onMouseLeave={
                  innerWidth > 576
                    ? e => {
                        if (label === currentMenu) {
                          setCurrentMenu('');
                        }
                      }
                    : () => {}
                }
              >
                <div className={styles.itemLabel}>{label}</div>
                {(currentMenu === label || isMobile()) && (
                  <ul className={styles.links}>
                    {children.map(({ label, link }, index) => {
                      return (
                        <li key={index}>
                          <a className={styles.link} href={'Download Wallet' ? null : link} onClick={() => label === 'Download Wallet' ? handleScroll() : {}}>
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
            <div
              className={styles.switch}
              onClick={() =>
                router.pathname === '/sakura' ? router.push('/') : router.push('sakura')
              }
            >
              {router.pathname === '/sakura' ? <Logo /> : <SakuraLogo />}
              <span>
                {router.pathname === '/sakura'
                  ? 'Clover Mainnet'
                  : 'Sakura Sisternet'}
              </span>
            </div>
          </ul>
        )}
      </div>

      {/*<Social className={styles.social} items={SOCIALS} />*/}

      {/*<div className={styles.footer}>*/}
      {/*  &copy;2021&nbsp;Clover.finance All Rights Reserved.*/}
      {/*</div>*/}
    </nav>
  );
};

export default Navigation;
