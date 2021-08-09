import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Navigation from '../Navigation/Navigation';
import cn from 'classnames';
import MenuButton from '../MenuButton/MenuButton';
import styles from './Header.module.scss';
import Logo from '../../public/svg/logo.svg';
import SakuraLogo from '../../public/svg/sakura_logo.svg';
import LouderIcon from '../../public/svg/louder_icon.svg';
import { HEADER_MENU } from '../../constants';

const Header = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const toggleActive = useCallback(() => setActive(!active), [active]);
  const router = useRouter();

  useEffect(() => {
    const html = document.documentElement;

    const onScroll = () => {
      if (html.scrollTop > 40) {
        setScroll(true);
      } else if (scroll) {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(styles.wrapper, {
        [router.pathname === '/sakura' ? styles.fixedSakura : styles.fixedClover]: scroll,
      })}
    >
      {showReminder && (
        <div className={styles.reminderWrapper}>
          <div className={styles.reminderContent}>
            <LouderIcon className={styles.reminderIcon}></LouderIcon>
            <span className={styles.reminderWord}>
            Sakura crowdloan is now open. Support the Sakura parachain auction for bonus SKU airdrop and sKSM.{' '}
            </span>
            <span
              className={styles.learnMore}
              onClick={() => window.open('https://auction.clover.finance/#/')}
            >
              Learn more
            </span>
            <img
              className={styles.closeReminder}
              src="/svg/close.svg"
              alt=""
              onClick={() => setShowReminder(false)}
            />
          </div>
        </div>
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <i className={styles.logoImage}>
              {router.pathname === '/sakura' ? <SakuraLogo /> : <Logo />}
            </i>
            <div
              className={cn(
                styles.logoText,
                router.pathname === '/sakura' && styles.logoTextSakura,
              )}
            >
              {router.pathname === '/sakura' ? 'sakura' : 'clover'}
            </div>
          </div>
          <Navigation items={HEADER_MENU} active={active} />
          <div className={styles.rightBox}>
            <MenuButton
              className={styles.button}
              active={active}
              onClick={toggleActive}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
