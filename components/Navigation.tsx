import React, { useMemo } from 'react';
import cn from 'classnames';
import Social from './Social';
import styles from '../styles/Navigation.module.scss';
import { SOCIALS } from '../constants';

const Navigation = ({
  className,
  items = [],
  active = false,
}: {
  className?: string;
  items?: {
    link: string;
    label: string;
  }[];
  active?: boolean;
}) => {
  const data = useMemo(() => (
    items?.map(({ link, label}) => (
      <li key={link} className={styles.item}>
        <a
          className={styles.link}
          href={link}
          target="_blank"
        >
          {label}
        </a>
      </li>
    ))
  ), [items]);
  return (
    <nav
      className={cn(styles.nav, className, {
        [`${styles.navActive}`]: active,
      })}
    >
      <div className={styles.container}>
        {!!data.length && (
          <ul className={styles.list}>{data}</ul>
        )}
        <Social
          className={styles.social}
          items={SOCIALS}
        />
      </div>
      <div className={styles.footer}>
        &copy;2021&nbsp;CloverProject. All Rights Reserved.
      </div>
    </nav>
  );
};

export default Navigation;
