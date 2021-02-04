import React from 'react';
import Social from './Social';
import styles from '../styles/Footer.module.scss';
import { SOCIALS } from '../constants';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <p className={styles.text}>
        &copy;2021&nbsp;CloverProject. All Rights Reserved.
      </p>
      <Social
        className={styles.social}
        items={SOCIALS}
      />
    </div>
  </footer>
);

export default Footer;
