import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from '../styles/Social.module.scss';
import twitterIcon from '../public/twitter.svg';
import telegramIcon from '../public/telegram.svg';
import discordIcon from '../public/discordd.svg';
import mediumIcon from '../public/medium.svg';
import { SOCIAL_ICONS } from '../constants';

const iconsMap = {
  [`${SOCIAL_ICONS.twitter}`]: twitterIcon,
  [`${SOCIAL_ICONS.telegram}`]: telegramIcon,
  [`${SOCIAL_ICONS.discord}`]: discordIcon,
  [`${SOCIAL_ICONS.medium}`]: mediumIcon,
};

const Social = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    link: string;
    icon: keyof typeof iconsMap;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ link, icon}) => {
      const IconComponent = iconsMap[icon];
      return (
        <li key={icon} className={styles.item}>
          <a
            className={styles.link}
            href={link}
            target="_blank"
          >
            <IconComponent />
          </a>
        </li>
      );
    })
  ), [items]);
  if (data.length) {
    return (
      <div className={cn(styles.social, className)}>
        <ul className={styles.list}>{data}</ul>
      </div>
    );
  }
  return null;
};

export default Social;
